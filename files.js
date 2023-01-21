import {storage} from './config'


const uploadFile = (files) => {
    firebaseApp.
     if (files.length != 0) {

      //Loops through all the selected files
      for (let i = 0; i < files.length; i++) {

        //create a storage reference
        var storage = storage().ref(files[i].name);

        //upload file
        var upload = storage.put(files[i]);

        //update progress bar
        upload.on(
          "state_changed",
          function progress(snapshot) {
            var percentage =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById("progress").value = percentage;
          },

          function error() {
            alert("error uploading file");
          },

          function complete() {
            document.getElementById(
              "uploading"
            ).innerHTML += `${files[i].name} upoaded <br />`;
          }
        );
      }
      } else {
      alert("No file chosen");
      }
      });
}
