//Validar que no existan datos vacios por medio de una funcion
function ValidarDatos()
{
    let id=document.querySelector("#id").value;
    let nombre=document.querySelector("#nombre").value;
    let profesion=document.querySelector("#profesion").value;
    let salario=document.querySelector("#salario").value;

    if( id=="" || nombre =="" || profesion=="" || salario=="")
    {
        alert("todos los datos son requeridos");
        return false;
    }
    return true;

} 
// funcion0 para agregar datos
function GuardarDatos()
{
    if(ValidarDatos()==true)
    {
        let id=document.querySelector("#id").value;
        let nombre=document.querySelector("#nombre").value;
        let profesion=document.querySelector("#profesion").value;
        let salario=document.querySelector("#salario").value;

        let listaDatos;
        if(localStorage.getItem("peopleList")==null)
        {
            listaDatos=[];
        }
        else
        {
            listaDatos=JSON.parse(localStorage.getItem("peopleList"));
        }
        listaDatos.push(
            {
                "id":id,
                "nombre":nombre,
                "profesion":profesion,
                "salario":salario
            }
        );
        localStorage.setItem("peopleList",JSON.stringify(listaDatos));
        mostrarDatos();
        //limpiar los
    }
}
function mostrarDatos()
{
    let listaDatos;
    if(localStorage.getItem("peopleList")==null)
    {
        listaDatos=[];
    }
    else
    {
        listaDatos=JSON.parse(localStorage.getItem("peopleList"));
    }
    let html="";

    listaDatos.forEach(function(clave,valor)
     {
        html +="<tr>";
        html +="<td>"+clave.id +"</td>";
        html +="<td>"+clave.nombre +"</td>";
        html +="<td>"+clave.profesion +"</td>";
        html +="<td>"+clave.salario +"</td>";
        html +='<td><button onclick=actualizarDatos('+valor+') class="btn btn-warning m-2">Editar</button></td>';
        html+="</tr>";
        
    });
    document.querySelector("#crudTable tbody").innerHTML=html;
    }