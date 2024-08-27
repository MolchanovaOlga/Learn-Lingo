export const selectTeachersItems = (state) => state.teachers.items;
export const selectTeachersLastKey = (state) => state.teachers.lastKey;
export const selectFavoriteTeachers = (state) => state.teachers.favorites;

export const selectTeachersLoading = (state) => state.teachers.loading;
export const selectTeachersError = (state) => state.teachers.error;
