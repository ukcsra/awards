function updateImages() {

	showPreviews();

	var bgGradient1 = document.getElementById('formGradient1').value;
	var bgGradient2 = document.getElementById('formGradient2').value;

	var textLine1 = document.getElementById('formText1').value;
	var textLine2 = document.getElementById('formText2').value;
	var textLine3 = document.getElementById('formText3').value;
	var textLine4 = document.getElementById('formText4').value;
	var textLine5 = document.getElementById('formText5').value;

	var textFill1 = document.getElementById('formFillCheck1').checked;
	var textFill2 = document.getElementById('formFillCheck2').checked;
	var textFill3 = document.getElementById('formFillCheck3').checked;
	var textFill4 = document.getElementById('formFillCheck4').checked;
	var textFill5 = document.getElementById('formFillCheck5').checked;

	var facebookBaseline = 315;
	var twitterBaseline = 256;
	var instagramBaseline = 540;

	var facebookWidth = 1200;
	var facebookHeight = 630;
	var twitterWidth = 1024;
	var twitterHeight = 512;
	var instagramWidth = 1080;
	var instagramHeight = instagramWidth;


	showLines();

	var canvas = document.getElementById('facebook');
	var context = canvas.getContext('2d');

	// Create gradient
	var grd = context.createLinearGradient(0,0,1200,630);
	grd.addColorStop(0, bgGradient1);
	grd.addColorStop(1, bgGradient2);

	// Fill with gradient
	context.fillStyle = grd;
	context.fillRect(0,0,1200,630);

	// Add text
	context.textBaseline = "middle";
	context.font = "bold 100px 'Avenir Next'";
	context.strokeStyle = "#ffffff";
	context.lineWidth   = 3;
	context.fillStyle = "#ffffff"

	if ( textLine2 == "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, facebookBaseline);
		} else {
			context.fillText(textLine1, 50, facebookBaseline);
		}

	} else if ( textLine3 == "" ) {

		if (textFill1 == false) {
			context.strokeText(textLine1, 50, (facebookBaseline - 50));
		} else {
			context.fillText(textLine1, 50, (facebookBaseline - 50));
		}

		if (textFill2 == false) {
			context.strokeText(textLine2, 50, (facebookBaseline + 50));
		} else {
			context.fillText(textLine2, 50, (facebookBaseline + 50));
		}

	} else if ( textLine4 == "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, (facebookBaseline - 100));
		} else {
			context.fillText(textLine1, 50, (facebookBaseline - 100));
		}

    	if (textFill2 == false) {
			context.strokeText(textLine2, 50, facebookBaseline);
		} else {
			context.fillText(textLine2, 50, facebookBaseline);
		}

    	if (textFill3 == false) {
			context.strokeText(textLine3, 50, (facebookBaseline + 100));
		} else {
			context.fillText(textLine3, 50, (facebookBaseline + 100));
		}

	} else if ( textLine5 == "" ) {

		if (textFill1 == false) {
			context.strokeText(textLine1, 50, (facebookBaseline - 150));
		} else {
			context.fillText(textLine1, 50,  (facebookBaseline - 150));
		}

		if (textFill2 == false) {
			context.strokeText(textLine2, 50, (facebookBaseline - 50));
		} else {
			context.fillText(textLine2, 50, (facebookBaseline - 50));
		}

		if (textFill3 == false) {
			context.strokeText(textLine3, 50, (facebookBaseline + 50));
		} else {
			context.fillText(textLine3, 50,  (facebookBaseline + 50));
		}

		if (textFill4 == false) {
			context.strokeText(textLine4, 50, (facebookBaseline + 150));
		} else {
			context.fillText(textLine4, 50, (facebookBaseline + 150));
		}

	} else if ( textLine5 != "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, (facebookBaseline - 200));
		} else {
			context.fillText(textLine1, 50, (facebookBaseline - 200));
		}

    	if (textFill2 == false) {
			context.strokeText(textLine2, 50, (facebookBaseline - 100));
		} else {
			context.fillText(textLine2, 50, (facebookBaseline - 100));
		}

    	if (textFill3 == false) {
			context.strokeText(textLine3, 50, facebookBaseline);
		} else {
			context.fillText(textLine3, 50,  facebookBaseline);
		}

    	if (textFill4 == false) {
			context.strokeText(textLine4, 50, (facebookBaseline + 100));
		} else {
			context.fillText(textLine4, 50, (facebookBaseline + 100));
		}

    	if (textFill5 == false) {
			context.strokeText(textLine5, 50, (facebookBaseline + 200));
		} else {
			context.fillText(textLine5, 50, (facebookBaseline + 200));
		}

	}




	// save canvas image as data url (png format by default)
	var dataURL = canvas.toDataURL();

	// set canvasImg image src to dataURL
	// so it can be saved as an image
	document.getElementById('facebook-output').src = dataURL;

	var canvas = document.getElementById('twitter');
	var context = canvas.getContext('2d');

	// Create gradient
	var grd = context.createLinearGradient(0,0,1024,512);
	grd.addColorStop(0, bgGradient1);
	grd.addColorStop(1, bgGradient2);

	// Fill with gradient
	context.fillStyle = grd;
	context.fillRect(0,0,1024,512);

	// Add text
	context.textBaseline = "middle";
	context.font = "bold 85px 'Avenir Next'";
	context.strokeStyle = "#ffffff";
	context.lineWidth   = 3;
	context.fillStyle = "#ffffff"

	if ( textLine2 == "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, twitterBaseline);
		} else {
			context.fillText(textLine1, 50, twitterBaseline);
		}

	} else if ( textLine3 == "" ) {

		if (textFill1 == false) {
			context.strokeText(textLine1, 50, (twitterBaseline - 40));
		} else {
			context.fillText(textLine1, 50, (twitterBaseline - 40));
		}

		if (textFill2 == false) {
			context.strokeText(textLine2, 50, (twitterBaseline + 40));
		} else {
			context.fillText(textLine2, 50, (twitterBaseline + 40));
		}

	} else if ( textLine4 == "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, (twitterBaseline - 80));
		} else {
			context.fillText(textLine1, 50, (twitterBaseline - 80));
		}

    	if (textFill2 == false) {
			context.strokeText(textLine2, 50, twitterBaseline);
		} else {
			context.fillText(textLine2, 50, twitterBaseline);
		}

    	if (textFill3 == false) {
			context.strokeText(textLine3, 50, (twitterBaseline + 80));
		} else {
			context.fillText(textLine3, 50, (twitterBaseline + 80));
		}

	} else if ( textLine5 == "" ) {

		if (textFill1 == false) {
			context.strokeText(textLine1, 50, (twitterBaseline - 120));
		} else {
			context.fillText(textLine1, 50, (twitterBaseline - 120));
		}

		if (textFill2 == false) {
			context.strokeText(textLine2, 50, (twitterBaseline - 40));
		} else {
			context.fillText(textLine2, 50, (twitterBaseline - 40));
		}

		if (textFill3 == false) {
			context.strokeText(textLine3, 50, (twitterBaseline + 40));
		} else {
			context.fillText(textLine3, 50, (twitterBaseline + 40));
		}

		if (textFill4 == false) {
			context.strokeText(textLine4, 50, (twitterBaseline + 120));
		} else {
			context.fillText(textLine4, 50, (twitterBaseline + 120));
		}

	} else if ( textLine5 != "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, (twitterBaseline - 160));
		} else {
			context.fillText(textLine1, 50, (twitterBaseline - 160));
		}

    	if (textFill2 == false) {
			context.strokeText(textLine2, 50, (twitterBaseline - 80));
		} else {
			context.fillText(textLine2, 50, (twitterBaseline - 80));
		}

    	if (textFill3 == false) {
			context.strokeText(textLine3, 50, twitterBaseline);
		} else {
			context.fillText(textLine3, 50, twitterBaseline);
		}

    	if (textFill4 == false) {
			context.strokeText(textLine4, 50, (twitterBaseline + 80));
		} else {
			context.fillText(textLine4, 50, (twitterBaseline + 80));
		}

    	if (textFill5 == false) {
			context.strokeText(textLine5, 50, (twitterBaseline + 160));
		} else {
			context.fillText(textLine5, 50, (twitterBaseline + 160));
		}

	}

	// save canvas image as data url (png format by default)
	var dataURL = canvas.toDataURL();

	// save canvas image as data url (png format by default)
	var dataURL = canvas.toDataURL();

	// set canvasImg image src to dataURL
	// so it can be saved as an image
	document.getElementById('twitter-output').src = dataURL;

	var canvas = document.getElementById('instagram');
	var context = canvas.getContext('2d');

	// Create gradient
	var grd = context.createLinearGradient(0,0,1024,512);
	grd.addColorStop(0, bgGradient1);
	grd.addColorStop(1, bgGradient2);

	// Fill with gradient
	context.fillStyle = grd;
	context.fillRect(0,0,1080,1080);

	// Add text
	context.textBaseline = "middle";
	context.font = "bold 125px 'Avenir Next'";
	context.strokeStyle = "#ffffff";
	context.lineWidth   = 3;
	context.fillStyle = "#ffffff"

	if ( textLine2 == "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, instagramBaseline);
		} else {
			context.fillText(textLine1, 50, instagramBaseline);
		}

	} else if ( textLine3 == "" ) {

		if (textFill1 == false) {
			context.strokeText(textLine1, 50, (instagramBaseline - 60));
		} else {
			context.fillText(textLine1, 50, (instagramBaseline - 60));
		}

		if (textFill2 == false) {
			context.strokeText(textLine2, 50, (instagramBaseline + 60));
		} else {
			context.fillText(textLine2, 50, (instagramBaseline + 60));
		}

	} else if ( textLine4 == "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, (instagramBaseline - 120));
		} else {
			context.fillText(textLine1, 50, (instagramBaseline - 120));
		}

    	if (textFill2 == false) {
			context.strokeText(textLine2, 50, instagramBaseline);
		} else {
			context.fillText(textLine2, 50, instagramBaseline);
		}

    	if (textFill3 == false) {
			context.strokeText(textLine3, 50, (instagramBaseline + 120));
		} else {
			context.fillText(textLine3, 50, (instagramBaseline + 120));
		}

	} else if ( textLine5 == "" ) {

		if (textFill1 == false) {
			context.strokeText(textLine1, 50, (instagramBaseline - 180));
		} else {
			context.fillText(textLine1, 50,  (instagramBaseline - 180));
		}

		if (textFill2 == false) {
			context.strokeText(textLine2, 50, (instagramBaseline - 60));
		} else {
			context.fillText(textLine2, 50, (instagramBaseline - 60));
		}

		if (textFill3 == false) {
			context.strokeText(textLine3, 50, (instagramBaseline + 60));
		} else {
			context.fillText(textLine3, 50,  (instagramBaseline + 60));
		}

		if (textFill4 == false) {
			context.strokeText(textLine4, 50, (instagramBaseline + 180));
		} else {
			context.fillText(textLine4, 50, (instagramBaseline + 180));
		}

	} else if ( textLine5 != "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, (instagramBaseline - 240));
		} else {
			context.fillText(textLine1, 50, (instagramBaseline - 240));
		}

    	if (textFill2 == false) {
			context.strokeText(textLine2, 50, (instagramBaseline - 120));
		} else {
			context.fillText(textLine2, 50, (instagramBaseline - 120));
		}

    	if (textFill3 == false) {
			context.strokeText(textLine3, 50, instagramBaseline);
		} else {
			context.fillText(textLine3, 50,  instagramBaseline);
		}

    	if (textFill4 == false) {
			context.strokeText(textLine4, 50, (instagramBaseline + 120));
		} else {
			context.fillText(textLine4, 50, (instagramBaseline + 120));
		}

    	if (textFill5 == false) {
			context.strokeText(textLine5, 50, (instagramBaseline + 240));
		} else {
			context.fillText(textLine5, 50, (instagramBaseline + 240));
		}

	}

	// save canvas image as data url (png format by default)
	var dataURL = canvas.toDataURL();

	// save canvas image as data url (png format by default)
	var dataURL = canvas.toDataURL();

	// set canvasImg image src to dataURL
	// so it can be saved as an image
	document.getElementById('instagram-output').src = dataURL;

}

function showPreviews() {

	if( document.getElementById('placeholder').style.display != "none" )
   {
      document.getElementById('placeholder').style.display = "none";
      document.getElementById('facebook-preview').style.display = "inherit";
      document.getElementById('twitter-preview').style.display = "inherit";
      document.getElementById('instagram-preview').style.display = "inherit";
   }
   else
   {

   }

}

function showLines() {

	if( document.getElementById('formText1').value != "" ) {
      document.getElementById('lines2').style.display = "flex";
	};
	if( document.getElementById('formText2').value != "" ) {
      document.getElementById('lines3').style.display = "flex";
	};
	if( document.getElementById('formText3').value != "" ) {
      document.getElementById('lines4').style.display = "flex";
	};
	if( document.getElementById('formText4').value != "" ) {
      document.getElementById('lines5').style.display = "flex";
	};

}