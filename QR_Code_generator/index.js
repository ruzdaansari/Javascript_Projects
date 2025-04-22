document.addEventListener("DOMContentLoaded",()=>{
    const qrForm = document.querySelector("#qrForm");
    const urlText = document.querySelector("#qrText");
    const qrSize = document.querySelector("#qrSize");
    const darkColor = document.querySelector("#darkColor");
    const lightColor = document.querySelector("#lightColor");
    const qrCode = document.querySelector("#qrCode");
    const downloadContainer = document.querySelector(".downloadContainer")
    const emptyMsg = document.querySelector("#emptyMsg");
    const downloadBtn = document.querySelector("#downloadBtn");

    let qrCodeInstance = null;


    function submitHandler(e){
        e.preventDefault();

        console.log(urlText.value,qrSize.value,darkColor.value,lightColor.value);

        if(!urlText.value){
            alert("Please enter text or URL to generate QR code");
            return;
        }

         qrCode.innerHTML = " "

        qrCodeInstance = new QRCode(qrCode,{
            text:urlText.value.trim(),
            width:+qrSize.value,
            height:+qrSize.value,
            colorDark:darkColor.value,
            colorLight:lightColor.value,
            correctLevel:QRCode.CorrectLevel.H
        });

        emptyMsg.style.display = "none"
        downloadContainer.style.display = "flex"
    }

    function downloadBtnhandler(e){

        if(!qrCodeInstance) return false;

        const img  = qrCode.querySelector("img");

        if(img){

            const downloadLink = document.createElement("a");

            downloadLink.href = img.src;
            downloadLink.download = "qr_code.png";

            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            // urlText.value = " ";
        }else{
            alert("Unable to download the qr code")
        }
    }

    qrForm.addEventListener("submit",(e)=>submitHandler(e));
    downloadBtn.addEventListener("click",(e)=>downloadBtnhandler(e))
})