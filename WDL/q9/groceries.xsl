<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:template match="/">
		
		<html>
			<head>
				<title> My Groceries</title>
				<style>
					

				</style>

			</head>

			<body>
				
				<table>
					
					<tr>
							
							<th>ITEM</th>
							<th>QUANTITY</th>
							<th>BRAND</th>
							<th>PRICE</th>

					</tr>

					<xsl:for-each select="groceriesStore/grocery">
			
						<tr>
							
							<td> <xsl:value-of select="item"/> </td>


							<td> <xsl:value-of select="quantity"/> </td>


							<td> <xsl:value-of select="brand"/> </td>


							<td> <xsl:value-of select="price"/> </td>


						</tr>


					</xsl:for-each>


				</table>

			</body>


		</html>



	</xsl:template>

</xsl:stylesheet>	