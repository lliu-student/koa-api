/**
 *
 * @param data
 * @param page
 * @param pageSize
 * @returns
 */
function paginate<T>(data: Array<T>, page = 1, pageSize = 0) {
  const offset = (page - 1) * pageSize;
  const limit = pageSize;
  const total = data.length;
  const list = data.slice(offset, offset + limit);
  return {
    page,
    pageSize,
    total,
    list,
  };
}

export default paginate;
