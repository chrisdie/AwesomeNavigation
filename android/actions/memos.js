export function fetchMemos(
    channelId = undefined,
    pageNumber = 0,
    dispatchFetchStart = true
) {
    return async function(dispatch, getState) {
        const { channelsData, currentUser, memos } = getState();
        const activeChannelId = channelsData.activeChannelId || "allMemos"; 
        try {
           
            const path =
                activeChannelId !== "allMemos"
                    ? `/secure/companies/59fda1788a3e505119ddb1b1/channels/${activeChannelId}/documents?page=${pageNumber}`
                    : `/secure/companies/${companyId}/documents?page=${pageNumber}`;

            const response = await dispatch(get(path));
            if (
                response.data &&
                response.data.success &&
                response.data.payload &&
                response.data.payload.items
            ) {
                let unreadMemos = [];
                const memosPayload = response.data.payload;
                let memos = response.data.payload.items;

                if (memosPayload.unread) {
                    unreadMemos = memosPayload.unread;
                }
                let parsedMemo = memos.map((memo, index) => {
                    memo.unread = unreadMemos.indexOf(memo._id) === -1 ? false : true;
                    return parseMemo(memo);
                });

                const memoIds = _.chain(parsedMemo)
                    .map("_id")
                    .value();
                dispatch(fetchMemosFinish(parsedMemo));
                dispatch(migrateMemosIntoChannels(activeChannelId, memoIds));
            }
            
        } catch (error) {
            dispatch(fetchMemosFailure());
            LoggingService.log("fetchMemos:memos.js", error);
        }
    };
}