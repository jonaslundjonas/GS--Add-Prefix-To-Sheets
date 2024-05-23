/**
 * addPrefixToSheets
 * 
 * This script is designed to add a specified prefix to the names of all sheets within the active Google Spreadsheet.
 * The script prompts the user to enter a prefix and then appends this prefix to the beginning of each sheet name.
 * If a sheet name starts with "Copy of" or "Kopia av", these phrases will be removed before the prefix is added.
 * 
 * 
 * Detailed Steps:
 * 1. The script prompts the user to enter a desired prefix.
 * 2. If the user confirms by clicking "OK", the script retrieves the entered prefix.
 * 3. The script then fetches the active spreadsheet and all sheets within it.
 * 4. The script iterates over each sheet, checks if the name starts with "Copy of" or "Kopia av", and removes these phrases if present.
 * 5. The prefix is then added to the beginning of each sheet name.
 * 6. The modified sheet names are updated within the spreadsheet.
 * 7. A confirmation message is displayed to inform the user that the prefix has been added to all sheets.
 * 8. If the user cancels the operation, an alert informs the user that the operation was cancelled.
 * 
 *
 * 
 * Written by Jonas Lund, 2024.
 */

function addPrefixToSheets() {
  // Prompt the user to enter the desired prefix
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt('Ange prefix', 'Skriv in det prefix du vill lägga till på alla ark:', ui.ButtonSet.OK_CANCEL);

  // Check if the user clicked OK
  if (response.getSelectedButton() == ui.Button.OK) {
    var prefix = response.getResponseText();
    
    // Get the active spreadsheet
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    
    // Get all sheets
    var sheets = spreadsheet.getSheets();
    
    // Loop through all sheets and set the prefix on their names
    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      var sheetName = sheet.getName();
      var newName = sheetName;
      
      // Replace "Copy of" or "Kopia av" with the prefix
      if (sheetName.startsWith("Copy of")) {
        newName = prefix + sheetName.substring(7); // Remove "Copy of" and add the prefix
      } else if (sheetName.startsWith("Kopia av")) {
        newName = prefix + sheetName.substring(8); // Remove "Kopia av" and add the prefix
      } else {
        newName = prefix + sheetName;
      }
      
      sheet.setName(newName);
    }
    
    // Show a confirmation to the user
    ui.alert('Prefix "' + prefix + '" har lagts till på alla ark.');
  } else {
    // The user cancelled the operation
    ui.alert('Operationen avbröts.');
  }
}
