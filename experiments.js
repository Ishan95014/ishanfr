const fs = require('fs');

// Get the experiments folder
const experimentsFolder = './experiment_folder';

// Get the list of files in the experiments folder
const experimentsFiles = fs.readdirSync(experimentsFolder);

// Get the experiments.html file
const experimentsHtmlFile = './experiments.html';

// Open the experiments.html file
fs.writeFileSync(experimentsHtmlFile, '');

// For each file in the experiments folder,
// create a new section in the experiments.html file and fill it with the h1 tag and p tag from the experiment html file

for (let i = 0; i < experimentsFiles.length; i++) {
  // Get the current file
  const currentFile = experimentsFiles[i];

  // Get the name of the current file
  const currentFileName = currentFile.name;

  // If the current file is an html file
  if (currentFileName.indexOf(".html") != -1) {
    // Get the html file
    const htmlFile = fs.readFileSync(`${experimentsFolder}/${currentFile}`);

    // Get the html file contents
    const htmlFileContents = htmlFile.toString();

    // Get the h1 tag in the html file
    const h1Tag = htmlFileContents.match(/<h1>(.*?)<\/h1>/)[1];

    // Get the p tag in the html file with id "short-description"
    const pTag = htmlFileContents.match(
      /<p id="short-description">(.*?)<\/p>/
    )[1];

    // Create the section for the current experiment
    const section =
      `<section><h1>${h1Tag}</h1><p>${pTag}</p><a href='${currentFileName}'>View Experiment</a></section>`;

    // Write the section to the experiments.html file
    fs.appendFileSync(experimentsHtmlFile, section);
  }
}
