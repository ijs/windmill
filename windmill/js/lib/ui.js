/*
Copyright 2006, Open Source Applications Foundation

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
    
//Functionality that works for every browser
//Mozilla specific functionality abstracted to mozController.js
//Safari specific functionality abstracted to safController.js
//IE specific functionality abstracted to ieController.js

//The reason for this is that the start page only includes the one corresponding
//to the current browser, this means that the functionality in the Controller
//object is only for the current browser, and there is only one copy of the code being
//loaded into the browser for performance.

function UI() {
    
    //Run code and manage its result
    this.run_JS = function(){
        
    	var jstext = document.getElementById("jsrunner");
    	result = Run(jstext.value);
	
    	if (result == true){
    		Windmill.UI.write_result('Success');
    	}
    	else{
            Windmill.UI.write_result('No Response');    	
        }
	
    }

    //Clearing runner box
    this.clear_JS = function(){
    	var jstext = document.getElementById("jsrunner");
    	jstext.value = "";
    }
    
    //Toggle Pause
    this.toggle_loop_button_text = function(){
        var loop_button = document.getElementById("loopButton");
        if (loop_button.value == "Pause"){
            loop_button.value = "Run"
        }
        else{
            loop_button.value = "Pause";
        }
           
    }
    
    this.write_result = function(str){
        var resultsDiv = document.getElementById("tab4");
        resultsDiv.innerHTML = resultsDiv.innerHTML + "<br>" + str;
    }

}