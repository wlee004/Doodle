db.collection('Uploaded Files').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc)
    });
})