<table>
	<tr>
		<th>Name</th>
		<th>Favorite Color</th>
	</tr>
	<tr>
		<td>Bob</td> 
		<td>Yellow</td> 
	</tr> 
	<tr>
		<td>Michelle</td>
		<td>Purple</td>
	</tr>
	<tr>
		<td>Dave</td>
		<td>Orange</td>
	</tr>
	<tr>
		<td>Ben</td>
		<td>Red</td>
	</tr>
	<tr>
		<td>Freya</td>
		<td>White</td>
	</tr>
</table>
<p style="page-break-before: always;"></p>

<table>
	<tr>
		<th>Name</th>
		<th>Favorite Color</th>
	</tr>
	<tr>
		<td>Bob</td> 
		<td>Yellow</td> 
	</tr> 
	<tr>
		<td>Michelle</td>
		<td>Purple</td>
	</tr>
	<tr>
		<td>Dave</td>
		<td>Orange</td>
	</tr>
	<tr>
		<td>Ben</td>
		<td>Red</td>
	</tr>
	<tr>
		<td>Freya</td>
		<td>White</td>
	</tr>
</table>
<p style="page-break-before: always;"></p>

<?php

	$red = 40;

	echo $red;

 

echo 
'<table>
	<tr>
		<th>Name</th>
		<th>Favorite Color</th>
	</tr>
	<tr>
		<td>Bob</td> 
		<td>Yellow</td> 
	</tr> 
	<tr>
		<td>Michelle'  .$red.'</td>
		<td>Purple'.  '<span style="padding-left:20px">'.$red.'</span>'. '</td>
	</tr>
	<tr>
		<td>Dave'.  '<span style="padding-left:65px">'.$red.'</span>'. '</td>
		<td>Orange</td>
	</tr>
	<tr>
		<td>Ben</td>
		<td>Red</td>
	</tr>
	<tr>
		<td>Freya </td>
		<td>White</td>
	</tr>
</table>'
?>