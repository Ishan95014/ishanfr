// For each html file in the experiments folder, create a new section in the experiments.html file
// with an h1 tag conatining the h1 tag in the experiement hmlt file and a p tag containing the p tag in the experiment html file with id "short-description"
// and a link to the experiment html file

// Get the experiments folder
var experimentsFolder = new Folder("experiments");

// Get the list of files in the experiments folder
var experimentsFiles = experimentsFolder.getFiles();

// Get the experiments.html file
var experimentsHtmlFile = new File("experiments.html");

// Open the experiments.html file
experimentsHtmlFile.open("w");

// For each file in the experiments folder,
// create a new section in the experiments.html file and fill it with the h1 tag and p tag from the experiment html file

for (var i = 0; i < experimentsFiles.length; i++) {
  // Get the current file
  var currentFile = experimentsFiles[i];

  // Get the name of the current file
  var currentFileName = currentFile.name;

  // If the current file is an html file
  if (currentFileName.indexOf(".html") != -1) {
    // Get the html file
    var htmlFile = new File(currentFile);

    // Open the html file
    htmlFile.open("r");

    // Get the html file contents
    var htmlFileContents = htmlFile.read();

    // Close the html file
    htmlFile.close();

    // Get the h1 tag in the html file
    var h1Tag = htmlFileContents.match(/<h1>(.*?)<\/h1>/)[1];

    // Get the p tag in the html file with id "short-description"
    var pTag = htmlFileContents.match(
      /<p id="short-description">(.*?)<\/p>/
    )[1];

    // Create the section for the current experiment
    var section =
      "<section><h1>" +
      h1Tag +
      "</h1><p>" +
      pTag +
      "</p><a href='" +
      currentFileName +
      "'>View Experiment</a></section>";

    // Write the section to the experiments.html file
    experimentsHtmlFile.writeln(section);
  }
}
