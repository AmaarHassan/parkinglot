// method to return serialized and sorted response with id of the slot
module.exports = (snapshot) => {
  // serialize with id
  const slots = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // sort slots by their ids
  const sortedSlots = slots.sort((a, b) => Number(a.id) - Number(b.id));

  return sortedSlots;
};
