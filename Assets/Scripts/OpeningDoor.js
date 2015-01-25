#pragma strict
//@script RequireComponent(AudioSource)

private var guiShow : boolean = false;
private var guiShowInfo : boolean = false;
private var guiShowObject : boolean = false;

private var isOpen : Array = new Array(false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false); // seven doors

var info1 : GameObject;
var info2 : GameObject;
var info3 : GameObject;
var info4 : GameObject;
var info5 : GameObject;

var target : MonoScript;

//var info1impact : AudioClip;

var rayLength = 10;
var rayLengthInfo = 10;

//get the hammer to be destroyed
private var otherhammer : GameObject;
//private var otherPlayer : GameObject;

//hide cursor
function Start () {
	Screen.showCursor = false;
}



function Update()
{
	var hit : RaycastHit;
	var tag : String;
	var DoorIndex : int;
	var fwd = transform.TransformDirection(Vector3.forward);
	var DoorIndexEnd : int;


//	Debug.Log(Physics.Raycast(transform.position, fwd, hit, rayLength));

	if(Physics.Raycast(transform.position, fwd, hit, rayLength))
	{
		tag = hit.collider.gameObject.tag;
		DoorIndex = tag.IndexOf("Door");
		if(DoorIndex > -1)
		{
			DoorIndexEnd = (DoorIndex + 4); //length of "Door"
			updateDoor(
				hit.collider.gameObject,
				int.Parse(
					tag.Substring(
						DoorIndexEnd,
						(tag.Length - DoorIndexEnd)
					)
				),
				hit);
		} else {
			guiShow = false;
		}
	}
	else
	{
		guiShow = false;
	}
	if (!(Application.loadedLevelName == "World0"))
	{
		//*************
		if(Physics.Raycast(transform.position, fwd, hit, rayLength))
		{	print (PlayerPrefs.GetInt("PlayerScore"));
			if(hit.collider.gameObject.tag == "Hammer"||hit.collider.gameObject.tag == "Hammer_Empty")
			{	
				guiShowObject = true;
				if (Application.loadedLevelName == "World5")
				{	
					otherhammer = GameObject.FindWithTag("Hammer");
					Destroy(otherhammer);
					PlayerPrefs.SetInt ("PlayerScore", 1);
					guiShowObject = false;
				}
				
				/*else if(Input.GetKeyDown("e") && isOpen == true)
				{
					door.audio.Play("DoorClose");
					isOpen = false;
					guiShow = false;
				}*/
			}

		}
		else
		{
			guiShowObject = false;
		}
			//else { guiShow = true;
				
			 //}	
		//*************
		if(Physics.Raycast(transform.position, fwd, hit, rayLength))
		{
			if(hit.collider.gameObject.tag == "World1")
			{
				guiShowInfo = true;
				//if(Input.GetKeyDown("e") && isOpen == false)
				if(Input.GetKeyDown("e"))
				{
					//audio.Play(info1impact);
					info1.audio.Play();
					//isOpen = true;
					guiShowInfo = false;
					Application.LoadLevel ("World1");
				}
				
				/*else if(Input.GetKeyDown("e") && isOpen == true)
				{
					door.audio.Play("DoorClose");
					isOpen = false;
					guiShow = false;
				}*/
			}
		}	
		else
		{
			guiShowInfo = false;
			//audio.Stop(info1impact);
			info1.audio.Stop();
		}
		//*************
		if(Physics.Raycast(transform.position, fwd, hit, rayLength))
		{
			if(hit.collider.gameObject.tag == "World2")
			{
				guiShowInfo = true;
				//if(Input.GetKeyDown("e") && isOpen == false)
				if(Input.GetKeyDown("e"))
				{
					//audio.Play(info1impact);
					info2.audio.Play();
					//isOpen = true;
					guiShowInfo = false;
					Application.LoadLevel ("World2");
				}
				
				/*else if(Input.GetKeyDown("e") && isOpen == true)
				{
					door.audio.Play("DoorClose");
					isOpen = false;
					guiShow = false;
				}*/
			}
		}	
		else
		{
			guiShowInfo = false;
			//audio.Stop(info1impact);
			info2.audio.Stop();
		}
			//*************
		if(Physics.Raycast(transform.position, fwd, hit, rayLength))
		{
			if(hit.collider.gameObject.tag == "World3")
			{
				guiShowInfo = true;
				//if(Input.GetKeyDown("e") && isOpen == false)
				if(Input.GetKeyDown("e"))
				{
					//audio.Play(info1impact);
					info3.audio.Play();
					//isOpen = true;
					guiShowInfo = false;
					Application.LoadLevel ("World3");
				}
				
				/*else if(Input.GetKeyDown("e") && isOpen == true)
				{
					door.audio.Play("DoorClose");
					isOpen = false;
					guiShow = false;
				}*/
			}
		}	
		else
		{
			guiShowInfo = false;
			//audio.Stop(info1impact);
			info2.audio.Stop();
		}
			//*************
		if(Physics.Raycast(transform.position, fwd, hit, rayLength))
		{
			if(hit.collider.gameObject.tag == "World4")
			{
				guiShowInfo = true;
				//if(Input.GetKeyDown("e") && isOpen == false)
				if(Input.GetKeyDown("e"))
				{
					//audio.Play(info1impact);
					info4.audio.Play();
					//isOpen = true;
					guiShowInfo = false;
					Application.LoadLevel ("World4");
				}
				
				/*else if(Input.GetKeyDown("e") && isOpen == true)
				{
					door.audio.Play("DoorClose");
					isOpen = false;
					guiShow = false;
				}*/
			}
		}	
		else
		{
			guiShowInfo = false;
			//audio.Stop(info1impact);
			info2.audio.Stop();
		}
			//*************
		if(Physics.Raycast(transform.position, fwd, hit, rayLength))
		{
			if(hit.collider.gameObject.tag == "World5")
			{
				guiShowInfo = true;
				//if(Input.GetKeyDown("e") && isOpen == false)
				if(Input.GetKeyDown("e"))
				{
					//audio.Play(info1impact);
					info5.audio.Play();
					//isOpen = true;
					guiShowInfo = false;
					Application.LoadLevel ("World5");
				}
				
				/*else if(Input.GetKeyDown("e") && isOpen == true)
				{
					door.audio.Play("DoorClose");
					isOpen = false;
					guiShow = false;
				}*/
			}
		}	
		else
		{
			guiShowInfo = false;
			//audio.Stop(info1impact);
			info2.audio.Stop();
		}
		//se termina iful de la World0
	}
}

function updateDoor(door : GameObject, index : int, hit : RaycastHit)
{
	guiShow = true;
		
	if(Input.GetKeyDown("e"))
	{
		if (index != 4) {
			toggleDoor(door, index);
		} else {
			var alarmHandler : AlarmHandler = GetComponent(AlarmHandler);
			if (!alarmHandler.doorLocked) {
				toggleDoor(door, index);
			}
		}
	}
}

function toggleDoor(door : GameObject, index : int)
{
	var animationName : String;
	
	if(isOpen[index] == false)
	{
		animationName = String.Concat("Door",index.ToString(),"Open");
		isOpen[index] = true;
		guiShow = false;
	} else {
		animationName = String.Concat("Door",index.ToString(),"Close");
		isOpen[index] = false;
		guiShow = false;
	}
	
	door.animation.Play(animationName);
}

function OnGUI()
{
	//if(guiShow == true && isOpen == false)
	if(guiShowObject == true)
	{
		GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Get Object");
	}
	if(guiShow == true)
	{
		GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Use Door (E)");
	}
		if(guiShowInfo == true)
	{
		GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Enter World (E)");
	}
}