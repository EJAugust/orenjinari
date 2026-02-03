
logScope(1, facet.host, log => {
 if (facet.supported) {
  if (facet.isAsync) {
   if (environment !== "client")
    throw "Async Facets are only supported in the client environment."
   facet.define({
    promise: {
     value: GATE.promise
      .then(facetArray => facet.installAsync(facetArray))
      .then(() => log(`Async facet "${facet.host}" installed.`))
    }
   })
   log(`Enqueued.`)
  } else {
   facet.installSync()
   log(`Installed.`)
  }
 } else log(`Skipped (${facet.error})`)
})