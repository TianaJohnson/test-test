<Card className="admin_card">
<div className="admin_text">
  <UserHeader match={this.props.match} history={this.props.history}/>
  <h1>Customers</h1>
  <Button variant="outlined"
               color="primary"
               onClick={this.addNew}
               style={{ margin: 10 }}>
               Add New Customer
               </Button>
  </div> 
  
<Paper>
 <Table className="admin_table">
   <TableHead>
     <TableRow>
       <TableCell>Customer Name</TableCell>
       <TableCell>Pronouns</TableCell>
       <TableCell>email</TableCell>
       <TableCell>Phone Number</TableCell>
       <TableCell></TableCell>
     </TableRow>
   </TableHead>
   <TableBody>
         {this.props.reduxStore.addCust.customerReducer.map(client =>
           <AdminRow key={client.id} history={this.props.history} client={client}/>
         )}
         
       
   </TableBody>
 </Table>
</Paper>

</Card>