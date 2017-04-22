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
	var facebookLineHeight = 100;

	var twitterWidth = 1024;
	var twitterHeight = 512;
	var twitterLineHeight = 80;

	var instagramWidth = 1080;
	var instagramHeight = instagramWidth;
	var instagramLineHeight = 120;

	var img = document.getElementById("csra-logo");

	showLines();

	var canvas = document.getElementById('facebook');
	canvas.width = (facebookWidth * 2);
	canvas.height = (facebookHeight * 2);
	canvas.style.width = facebookWidth + "px";
	canvas.style.height = facebookHeight + "px";

	var context = canvas.getContext('2d');
	context.scale(2,2);

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
			context.strokeText(textLine1, 50, (facebookBaseline - (facebookLineHeight*0.5)));
		} else {
			context.fillText(textLine1, 50, (facebookBaseline - (facebookLineHeight*0.5)));
		}

		if (textFill2 == false) {
			context.strokeText(textLine2, 50, (facebookBaseline + (facebookLineHeight*0.5)));
		} else {
			context.fillText(textLine2, 50, (facebookBaseline + (facebookLineHeight*0.5)));
		}

	} else if ( textLine4 == "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, (facebookBaseline - (facebookLineHeight*1)));
		} else {
			context.fillText(textLine1, 50, (facebookBaseline - (facebookLineHeight*1)));
		}

    	if (textFill2 == false) {
			context.strokeText(textLine2, 50, facebookBaseline);
		} else {
			context.fillText(textLine2, 50, facebookBaseline);
		}

    	if (textFill3 == false) {
			context.strokeText(textLine3, 50, (facebookBaseline + (facebookLineHeight*1)));
		} else {
			context.fillText(textLine3, 50, (facebookBaseline + (facebookLineHeight*1)));
		}

	} else if ( textLine5 == "" ) {

		if (textFill1 == false) {
			context.strokeText(textLine1, 50, (facebookBaseline - (facebookLineHeight*1.5)));
		} else {
			context.fillText(textLine1, 50,  (facebookBaseline - (facebookLineHeight*1.5)));
		}

		if (textFill2 == false) {
			context.strokeText(textLine2, 50, (facebookBaseline - (facebookLineHeight*0.5)));
		} else {
			context.fillText(textLine2, 50, (facebookBaseline - (facebookLineHeight*0.5)));
		}

		if (textFill3 == false) {
			context.strokeText(textLine3, 50, (facebookBaseline + (facebookLineHeight*0.5)));
		} else {
			context.fillText(textLine3, 50,  (facebookBaseline + (facebookLineHeight*0.5)));
		}

		if (textFill4 == false) {
			context.strokeText(textLine4, 50, (facebookBaseline + (facebookLineHeight*1.5)));
		} else {
			context.fillText(textLine4, 50, (facebookBaseline + (facebookLineHeight*1.5)));
		}

	} else if ( textLine5 != "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, (facebookBaseline - (facebookLineHeight*2)));
		} else {
			context.fillText(textLine1, 50, (facebookBaseline - (facebookLineHeight*2)));
		}

    	if (textFill2 == false) {
			context.strokeText(textLine2, 50, (facebookBaseline - (facebookLineHeight*1)));
		} else {
			context.fillText(textLine2, 50, (facebookBaseline - (facebookLineHeight*1)));
		}

    	if (textFill3 == false) {
			context.strokeText(textLine3, 50, facebookBaseline);
		} else {
			context.fillText(textLine3, 50,  facebookBaseline);
		}

    	if (textFill4 == false) {
			context.strokeText(textLine4, 50, (facebookBaseline + (facebookLineHeight*1)));
		} else {
			context.fillText(textLine4, 50, (facebookBaseline + (facebookLineHeight*1)));
		}

    	if (textFill5 == false) {
			context.strokeText(textLine5, 50, (facebookBaseline + (facebookLineHeight*2)));
		} else {
			context.fillText(textLine5, 50, (facebookBaseline + (facebookLineHeight*2)));
		}

	}

	context.drawImage(img, (facebookWidth - 100) , (facebookHeight - 60), 80, 40);


	// save canvas image as data url (png format by default)
	var dataURL = canvas.toDataURL();

	// set canvasImg image src to dataURL
	// so it can be saved as an image
	document.getElementById('facebook-output').src = dataURL;

	var canvas = document.getElementById('twitter');
	canvas.width = (twitterWidth * 2);
	canvas.height = (twitterHeight * 2);
	canvas.style.width = twitterWidth + "px";
	canvas.style.height = twitterHeight + "px";

	var context = canvas.getContext('2d');
	context.scale(2,2);

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
			context.strokeText(textLine1, 50, (twitterBaseline - (twitterLineHeight*0.5)));
		} else {
			context.fillText(textLine1, 50, (twitterBaseline - (twitterLineHeight*0.5)));
		}

		if (textFill2 == false) {
			context.strokeText(textLine2, 50, (twitterBaseline + (twitterLineHeight*0.5)));
		} else {
			context.fillText(textLine2, 50, (twitterBaseline + (twitterLineHeight*0.5)));
		}

	} else if ( textLine4 == "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, (twitterBaseline - (twitterLineHeight*1)));
		} else {
			context.fillText(textLine1, 50, (twitterBaseline - (twitterLineHeight*1)));
		}

    	if (textFill2 == false) {
			context.strokeText(textLine2, 50, twitterBaseline);
		} else {
			context.fillText(textLine2, 50, twitterBaseline);
		}

    	if (textFill3 == false) {
			context.strokeText(textLine3, 50, (twitterBaseline + (twitterLineHeight*1)));
		} else {
			context.fillText(textLine3, 50, (twitterBaseline + (twitterLineHeight*1)));
		}

	} else if ( textLine5 == "" ) {

		if (textFill1 == false) {
			context.strokeText(textLine1, 50, (twitterBaseline - (twitterLineHeight*1.5)));
		} else {
			context.fillText(textLine1, 50, (twitterBaseline - (twitterLineHeight*1.5)));
		}

		if (textFill2 == false) {
			context.strokeText(textLine2, 50, (twitterBaseline - (twitterLineHeight*0.5)));
		} else {
			context.fillText(textLine2, 50, (twitterBaseline - (twitterLineHeight*0.5)));
		}

		if (textFill3 == false) {
			context.strokeText(textLine3, 50, (twitterBaseline + (twitterLineHeight*0.5)));
		} else {
			context.fillText(textLine3, 50, (twitterBaseline + (twitterLineHeight*0.5)));
		}

		if (textFill4 == false) {
			context.strokeText(textLine4, 50, (twitterBaseline + (twitterLineHeight*1.5)));
		} else {
			context.fillText(textLine4, 50, (twitterBaseline + (twitterLineHeight*1.5)));
		}

	} else if ( textLine5 != "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, (twitterBaseline - (twitterLineHeight*2)));
		} else {
			context.fillText(textLine1, 50, (twitterBaseline - (twitterLineHeight*2)));
		}

    	if (textFill2 == false) {
			context.strokeText(textLine2, 50, (twitterBaseline - (twitterLineHeight*1)));
		} else {
			context.fillText(textLine2, 50, (twitterBaseline - (twitterLineHeight*1)));
		}

    	if (textFill3 == false) {
			context.strokeText(textLine3, 50, twitterBaseline);
		} else {
			context.fillText(textLine3, 50, twitterBaseline);
		}

    	if (textFill4 == false) {
			context.strokeText(textLine4, 50, (twitterBaseline + (twitterLineHeight*1)));
		} else {
			context.fillText(textLine4, 50, (twitterBaseline + (twitterLineHeight*1)));
		}

    	if (textFill5 == false) {
			context.strokeText(textLine5, 50, (twitterBaseline + (twitterLineHeight*2)));
		} else {
			context.fillText(textLine5, 50, (twitterBaseline + (twitterLineHeight*2)));
		}

	}


	context.drawImage(img, (twitterWidth - 100) , (twitterHeight - 60), 80, 40);

	// save canvas image as data url (png format by default)
	var dataURL = canvas.toDataURL();

	// set canvasImg image src to dataURL
	// so it can be saved as an image
	document.getElementById('twitter-output').src = dataURL;

	var canvas = document.getElementById('instagram');
	canvas.width = (instagramWidth * 2);
	canvas.height = (instagramHeight * 2);
	canvas.style.width = instagramWidth + "px";
	canvas.style.height = instagramHeight + "px";

	var context = canvas.getContext('2d');
	context.scale(2,2);

	// Create gradient
	var grd = context.createLinearGradient(0, 0, instagramWidth, instagramHeight);
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
			context.strokeText(textLine1, 50, (instagramBaseline - (instagramLineHeight*0.5)));
		} else {
			context.fillText(textLine1, 50, (instagramBaseline - (instagramLineHeight*0.5)));
		}

		if (textFill2 == false) {
			context.strokeText(textLine2, 50, (instagramBaseline + (instagramLineHeight*0.5)));
		} else {
			context.fillText(textLine2, 50, (instagramBaseline + (instagramLineHeight*0.5)));
		}

	} else if ( textLine4 == "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, (instagramBaseline - (instagramLineHeight*1)));
		} else {
			context.fillText(textLine1, 50, (instagramBaseline - (instagramLineHeight*1)));
		}

    	if (textFill2 == false) {
			context.strokeText(textLine2, 50, instagramBaseline);
		} else {
			context.fillText(textLine2, 50, instagramBaseline);
		}

    	if (textFill3 == false) {
			context.strokeText(textLine3, 50, (instagramBaseline + (instagramLineHeight*1)));
		} else {
			context.fillText(textLine3, 50, (instagramBaseline + (instagramLineHeight*1)));
		}

	} else if ( textLine5 == "" ) {

		if (textFill1 == false) {
			context.strokeText(textLine1, 50, (instagramBaseline - (instagramLineHeight*1.5)));
		} else {
			context.fillText(textLine1, 50, (instagramBaseline - (instagramLineHeight*1.5)));
		}

		if (textFill2 == false) {
			context.strokeText(textLine2, 50, (instagramBaseline - (instagramLineHeight*0.5)));
		} else {
			context.fillText(textLine2, 50, (instagramBaseline - (instagramLineHeight*0.5)));
		}

		if (textFill3 == false) {
			context.strokeText(textLine3, 50, (instagramBaseline + (instagramLineHeight*0.5)));
		} else {
			context.fillText(textLine3, 50, (instagramBaseline + (instagramLineHeight*0.5)));
		}

		if (textFill4 == false) {
			context.strokeText(textLine4, 50, (instagramBaseline + (instagramLineHeight*1.5)));
		} else {
			context.fillText(textLine4, 50, (instagramBaseline + (instagramLineHeight*1.5)));
		}

	} else if ( textLine5 != "" ) {

    	if (textFill1 == false) {
			context.strokeText(textLine1, 50, (instagramBaseline - (instagramLineHeight*2)));
		} else {
			context.fillText(textLine1, 50, (instagramBaseline - (instagramLineHeight*2)));
		}

    	if (textFill2 == false) {
			context.strokeText(textLine2, 50, (instagramBaseline - (instagramLineHeight*1)));
		} else {
			context.fillText(textLine2, 50, (instagramBaseline - (instagramLineHeight*1)));
		}

    	if (textFill3 == false) {
			context.strokeText(textLine3, 50, instagramBaseline);
		} else {
			context.fillText(textLine3, 50, instagramBaseline);
		}

    	if (textFill4 == false) {
			context.strokeText(textLine4, 50, (instagramBaseline + (instagramLineHeight*1)));
		} else {
			context.fillText(textLine4, 50, (instagramBaseline + (instagramLineHeight*1)));
		}

    	if (textFill5 == false) {
			context.strokeText(textLine5, 50, (instagramBaseline + (instagramLineHeight*2)));
		} else {
			context.fillText(textLine5, 50, (instagramBaseline + (instagramLineHeight*2)));
		}

	}

	context.drawImage(img, (instagramWidth - 100) , (instagramHeight - 60), 80, 40);

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