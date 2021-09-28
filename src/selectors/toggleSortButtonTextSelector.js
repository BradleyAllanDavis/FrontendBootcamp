


export const toggleSortButtonTextSelector = state => {
  if (state.sortInfo.col === 'id') {
    return "Sorted by Id";
  } else {
    if (state.sortInfo.dir === 'asc') {
      return "Sorted by Name A->Z";
    } else {
      return "Sorted by Name Z->A";
    }
  }
};
  // const toggleSortButtonText = useSelector(state => {
  //   const { col: sortCol, dir: sortDir } = state.sortInfo;
  //   if (sortCol === 'id') {
  //     return "Sorted by Id";
  //   } else {
  //     if (sortDir === 'asc') {
  //       return "Sorted by Name A->Z";
  //     } else {
  //       return "Sorted by Name Z->A";
  //     }
  //   }
  // });