let editor;
window.onload=function(){
    editor=ace.edit("editor");
    editor.setTheme('ace/theme/dracula');
    editor.session.setMode("ace/mode/java");
}
function changeLanguage(){
    let language=$("#languages").val();
    if(language=='java')editor.session.setMode("ace/mode/java");
    else if(language=='c'||language=='cpp')editor.session.setMode("ace/mode/c_cpp");
    else if(language=='php')editor.session.setMode("ace/mode/php");
    else if(language=='python')editor.session.setMode("ace/mode/python");
}
function executeCode(){
    $.ajax({
        url:"/onlineIDE/app/compiler.php",
        method: "POST",
        data:{
            language:$("#languages").val(),
            code:editor.getSession().getValue()
        },
        success: function(response){
            $("output").text(response)
        }
    })
}