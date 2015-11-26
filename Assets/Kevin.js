#pragma strict

var player : GameObject ;
var bullet : GameObject ;
private var attackCoolTime : float ;
private var timer : float ;



function Start () {
	attackCoolTime = 0.5 ;
    timer = 0 ;
 	Attack() ;
}

function Update () {
 
 	timer += Time.deltaTime ;
 
    if (timer >= attackCoolTime) {
 
        Attack() ;
        timer = 0 ;
 
    }
 
    if (Input.GetKey("left")) {
    
        // 왼쪽 키가 눌리면 실행할 내용
         if (player.transform.position.x >= -0.5) {
        player.transform.position.x -= 0.01 ;
        }
        
    }
    else if (Input.GetKey("right")) {
    
        // 오른쪽 키가 눌리면 실행할 내용
        if (player.transform.position.x <= 0.5) {
        player.transform.position.x += 0.01 ; 
        }
    
    }
 
}

function Attack () {
 
    var currentBullet : GameObject ;
 
    currentBullet = Instantiate (bullet, player.transform.position,  Quaternion.identity) ;
 
 
}

function OnTriggerEnter (enterCollider : Collider) {
 
    if (enterCollider.gameObject.name == "bulletEraser") Destroy (gameObject) ;
 
}




