/**
 * Creates pagination
 * @param {number} size - takes page size
 * @param start - start page
 * @param perPage - content to show per page
 * @returns {{pagination: {start: number, next: number, prev: number, totalPages: number}}}
 */
export const paginator = (size, start = 0, perPage = 20) => {
    if (Number(size)) {
        const _size = Number(size);
        const next = start + perPage > _size ? _size : start + perPage;
        const prev = start + perPage > _size ? next - 1 - perPage : next - perPage;

        return {
            pagination: {
                totalPages: _size,
                start,
                next,
                prev,
            },
        };
    } else throw new Error(`Size is not a number`);
};
/**
 * Changes pages in component
 * @param {'next' | 'prev'} action
 * @param pagination
 * @param onNext - callback on next action
 * @param onPrev - callback on prev action
 */
export const changePage = (action, pagination, onNext, onPrev) => {
    console.log(action, pagination.totalPages, pagination.prev, pagination.next);
    if (action === 'next') {
        onNext(paginator(pagination.totalPages, pagination.next));
    }
    if (action === 'prev') {
        onPrev(paginator(pagination.totalPages, pagination.prev));
    }
};
