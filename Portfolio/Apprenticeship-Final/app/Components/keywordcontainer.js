var React = require('react');


var KeywordContainer = React.createClass({

getInitialState:function(){

	return { 
			 keyword:this.props.keyword,
			 
			 
	}

},









render:function(){

return(

	<li >
						
				
				  	
					
					<h5>	{this.state.keyword} </h5>
						
						
					
				
				
				
			</li> 


	);








}









});

module.exports = KeywordContainer ;