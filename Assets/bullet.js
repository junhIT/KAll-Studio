#pragma strict

private var bulletSpeed : float ;
 
function Start () {
 
    bulletSpeed = 50 ;
 
    gameObject.GetComponent(Rigidbody).AddForce(transform.up * bulletSpeed) ;
}


function Update () {

}