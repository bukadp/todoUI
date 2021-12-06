const list = [ 
    { 
        id: 1,
        name: 'create a post', 
        status: "Done", 
        priority: 'high'  
    }, 
    { 
        id: 2,
        name: 'chek the post', 
        status: 'Done', 
        priority: 'mi'  
    },
    {   
        id: 3,
        name: 'third task', 
        status: 'In Progress', 
        priority: 'low'  
    }
    ] 


    function changeStatus(taskName, status) {
        let statusToChange = list.find(item => item.name == taskName);
        statusToChange.status = status;
    };

    function getIndexByName (name) {
        let result = null;
        for (let i=0; i<list.length; i++){
            if (list[i].name == name){
                 result = i;
            }
            
        }
        return result 
    }

    function deleteTask(taskName) {
         let taskIndex = getIndexByName(taskName)
        //console.log ("taskIndex =", taskIndex )
         if (!taskIndex){
            return
         }
         list.splice (taskIndex, 1)               
    };

    function addTask (id, name, status, priority){
        list.push ({
            id:id,
            name:name, 
            status:status, 
            priority:priority
        }
            )
    }



    function ShowList(status) {
        let isMatch = false;
        console.log(status + ':')
        for (let i=0; i<list.length; i++) {
            if (list[i].status == status) {
                console.log('"' + list[i].name + '"' + ',')
                isMatch = true;
            }
        }
        if (!isMatch)
            console.log('-')
    }

    changeStatus("create a post", "Done");
   // deleteTask("chek the post");
    addTask (4, "add task", "To Do", 'high')
 




    list.sort(function (a, b) {
        if (a.priority > b.priority) {
          return 1;
        }
        if (a.priority < b.priority) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });


      function showBy(){

      }



    deleteTask("add task");

    ShowList("Done");
    ShowList("To Do");
    ShowList("In Progress");

    //console.log (list)