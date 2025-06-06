// Function to HTML encode the text
// This creates a new hidden element,
// inserts the given text into it
// and outputs it out as HTML
function htmlEncode(value) {
  return $("<div/>").text(value).html();
}

$(function () {
  // Specify an onclick function
  // for the generate button
  $("#generate").click(function () {
    // Generate the link that would be
    // used to generate the QR Code
    // with the given data
    let finalURL =
      "https://api.qrserver.com/v1/create-qr-code/?data=" +
      encodeURIComponent($("#content").val()) +
      "&size=160x160";

    // Replace the src of the image with
    // the QR code image
    $(".qr-code").attr("src", finalURL);
  });
});
