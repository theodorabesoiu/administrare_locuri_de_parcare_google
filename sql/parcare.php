<?php
require("credentiale.php");

function parseToXML($htmlStr)
{
$xmlStr=str_replace('<','&lt;',$htmlStr);
$xmlStr=str_replace('>','&gt;',$xmlStr);
$xmlStr=str_replace('"','&quot;',$xmlStr);
$xmlStr=str_replace("'",'&#39;',$xmlStr);
$xmlStr=str_replace("&",'&amp;',$xmlStr);
return $xmlStr;
}

// Opens a connection to a MySQL server
$connection=mysql_connect ('localhost', 'root', '');
if (!$connection) {
  die('Not connected : ' . mysql_error());
}

// Set the active MySQL database
$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
}

// Select all the rows in the markers table
$query = "SELECT * FROM locuriParcare WHERE 1";
$result = mysql_query($query);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}

header("Content-type: text/xml");

// Start XML file, echo parent node
echo '<markers>';

// Iterate through the rows, printing XML nodes for each
while ($row = @mysql_fetch_assoc($result)){
  // Add to XML document node
  echo '<marker ';
  echo 'id="' . $ind . '" ';
  echo 'category_id="' . $ind . '" ';
   echo 'owner="' . parseToXML($row['owner']) . '" ';
  echo 'adress="' . parseToXML($row['adress']) . '" ';
  echo 'price="' . $row['price'] . '" ';
  echo 'reserved="' . $row['reserved'] . '" ';
  echo 'latitudine="' . $row['latitudine'] . '" ';
  echo 'longitudine="' . $row['longitudine'] . '" ';
  
  echo '/>';
}

// End XML file
echo '</markers>';

?>