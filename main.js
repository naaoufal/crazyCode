function refreshImage () {
    const html = `
        <center>
            <img src="images/img.jpg" class="con">
        </center>`
    
    setInterval(() => {
        document.getElementById('pri').innerHTML = html
        // for test :
        console.log("this is work")
    },
    // set Time with ml sec for refresh !!!
    1000)
}

refreshImage()