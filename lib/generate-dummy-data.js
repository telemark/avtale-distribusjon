const nanoid = require('nanoid')

module.exports = data => {
  const dummy = {
    _id: data._id,
    jobId: data.jobId,
    method: 'PUT',
    url: data.url,
    payload: {
      aid: nanoid(),
      uid: '08065310695',
      type: data.payload.agreementType,
      name: `Dummy Foresatt - ${data.payload.name}`,
      partOf: data.payload.aid,
      isDummy: true,
      isManual: true,
      canBeDigital: false
    }
  }
  return dummy
}
