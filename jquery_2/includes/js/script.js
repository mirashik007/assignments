$(document).ready(function(){
	var $emplist=$('#wholeTable');
	var $allempList=$('#allempList');
	var $heading=$('#heading').html();
	var template=$('#allempList').html();
	var searchVal=null;
	var urlCondition="";
	var pageStart=0; 
	var checkSubmit="";
	/*Ajax GET event*/
	var ajaxGet=function(){
		$.ajax({
			type:"GET",
			url : 'http://localhost:8080/employee'+urlCondition,
			success: function(result){
				pagination(result);
			},
			error: function(){
				alert("Invalid search");
			}
		});
	};
	/*Ajax POST event*/
	var ajaxPost=function(empPost){
    
    else if(empPost.phone.length>10){
      alert("contact number cannot be >10");
    }
    else{

		$.ajax({
			type:"POST",
			url : 'http://localhost:8080/employee/'+posturlCondition,
			data: empPost,
			success: function(result){
				alert("Successfully inserted data");
				$('#myModal').modal('toggle');
			},
			error: function(){
				alert("Error on inserting the data");
			}
		});
		}
	};
	/*Ajax put event*/
	var ajaxPUT=function(empPost){
		$.ajax({
			type:"PUT",
			url : 'http://localhost:8080/employee/'+posturlCondition,
			data: empPost,
			success: function(result){
				console.log(posturlCondition);
				alert("Successfully inserted data");
				$('#myModal').modal('toggle');
				$emplist.html("");
				ajaxGet();
			},
			error: function(){
				console.log("error");
				alert("Error on updating the data");
			}
		});
	};	
	/*Load complete data*/
    $("#loadDetails").click(function(){
    	$emplist.html("");
    	searchVal==null;
    	pageStart=0;
    	urlCondition='?_start='+pageStart+'&_limit=51';
		ajaxGet();
	});
	/*Search*/
	$('#search').click(function(){
		$emplist.html("");
		searchVal=$('#searchtextbox').val();
    	pageStart=0;
    	urlCondition='?name_like='+searchVal+'&_start='+pageStart+'&_limit=51';
		ajaxGet();
	});
	
	/*Add new employee*/
	$('#inputForm').on('submit',function(e){
		e.preventDefault();
		if(checkSubmit=='Add'){
			AddNewEmployee();
		}
		else if(checkSubmit=='Edit'){
			console.log("Right");

			editEmp();
		}
		console.log(checkSubmit);
	});
	var AddNewEmployee= function(){
		console.log("Add Employee");
		var $name=$('#name').val();
		
		var $gender = $('input[name=gender]').filter(':checked').val();
		var $age=$('#age').val();
		var $company=$('#company').val();
		var $email=$('#email').val();
		var $phone=$('#phone').val();
		
		var empPost={
					
    				"name": $name,
					"gender": $gender,
					"age" : $age,
    				"company": $company,
    				"email": $email,
    				"phone": $phone,
    				
  			};
  		posturlCondition="";

  		ajaxPost(empPost);

	};

	var editEmp=function(){
		console.log("Inside edit");
		
		var $name=$('#name').val();
		var $gender = $('input[name=gender]').filter(':checked').val();
		var $age=$('#age').val();
		var $company=$('#company').val();
		var $email=$('#email').val();
		var $phone=$('#phone').val();
		var empPost={
    				
    				"name": $name,
					"gender": $gender,
					"age" : $age,
    				"company": $company,
    				"email": $email,
    				"phone": $phone,
    				
  			};
  		ajaxPUT(empPost);
	};
	// Value of modal window to empty
	$('#addEmp').click(function(){
		
		$('#name').val("");
		$('#age').val("");
		$('#gender').prop('checked',false);
		$('#company').val("");
		$('#email').val("");
		$('#phone').val("");
		urlCondition="";

		checkSubmit="Add";
		$('.editFooter').html('<button class="btn btn-primary" role="button" data-dismiss="modal">Cancel</button><button type="submit" class="btn btn-success" role="button" id="addEmp">Add Employee</button>');
	});

	
	/*Delete */
	$emplist.delegate('#deleteButton','click',function(){
		var id=$(this).attr('data-id');
		var tr=$(this).closest('tr');
		var check=confirm("Do you want to delete the data  ? ");
		if(check==true){
		$.ajax({
			type:"DELETE",
			url : "http://localhost:8080/employee/"+id ,
			success: function(result){
				alert("Data deleted successfully");
				tr.fadeOut(300,function(){
					$(this).remove();
				});
			},
			error: function(){
				alert("Error on deleting the record.");
			}
		});	
		}
	});
	// Edit 
	$emplist.delegate('#editButton','click',function(){
		var id=$(this).attr('data-id');
		tr=$(this).closest('tr');
		posturlCondition=id;
		$.ajax({
			type:"GET",
			url : 'http://localhost:8080/employee/'+posturlCondition,
			success: function(result){
    				$('#male').prop("disabled",false);
    				$('#female').prop("disabled",false);
    				
					$('#name').val(result.name);
					// $('#gender').val(result.gender);
					if(result.gender=='male'){
						$('#male').prop('checked',true);
					}
					else{
						$('#female').prop('checked',true);
					}
					$('#age').val(result.age);
					$('#company').val(result.company);
					$('#email').val(result.email);
					$('#phone').val(result.phone);
					checkSubmit="Edit";
					$('.editFooter').html('<button class="btn btn-primary" role="button" data-dismiss="modal">Cancel</button><button type="submit" class="btn btn-success" role="button" id="saveEdit">Save</button>')
				},
			error: function(){
				alert("Invalid search");
			}
		});
	});
	/*Hide both next and prev */
	$('.prevButton').hide();
	$('.nextButton').hide();
	/*Pagination*/
	/*Next button click*/
	$('.nextButton').click(function(){
		$emplist.html("");
		goNext();
	});
	/*Next function*/
	var goNext=function(){
		pageStart=pageStart+50;
		if(searchVal==null){
			urlCondition='?_start='+pageStart+'&_limit=51';
		}
		else{
			urlCondition='?name_like='+searchVal+'&_start='+pageStart+'&_limit=51';
		}
		ajaxGet();
		$('.prevButton').show();
	}
	/*Prev button click*/
	$('.prevButton').click(function(){
		$emplist.html("");
		goPrevious();

	});
	/*Prev function*/
	var goPrevious=function(){
		pageStart=pageStart-50;
		if(searchVal==null){
			urlCondition='?_start='+pageStart+'&_limit=51';
		}
		else{
			urlCondition='?name_like='+searchVal+'&_start='+pageStart+'&_limit=51';
		}
		ajaxGet();
		if(pageStart==0){
			$('.prevButton').hide();
		}
	}
	/*Pagination function*/
	var pagination=function(data){
				if(data.length!=0){
				if(data.length==51){
					$('.nextButton').show();
				}
				else{
					$('.nextButton').hide();
				}
				if(pageStart==0){
					$('.prevButton').hide();
				}
				$emplist.append(Mustache.render($heading));
				var counter=0;
				$.each(data,function(i,employee){
					$emplist.append(Mustache.render(template,employee));
					counter++;
					if(counter==50){
						return false;
					}
				});
			}
			else{
				$emplist.append('<h1>No data</h1>');
			}
	}
});