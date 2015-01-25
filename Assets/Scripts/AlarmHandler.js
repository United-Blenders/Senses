private var guiUseObject : boolean = false;
//@script RequireComponent(UI)

var rayLength = 10;
var rayLengthInfo = 10;

var doorLocked = true;

private var pinCode : int[];
private var correctPinCode : int[];
private var currentPinNumberPosition : int;
private var pinCodeLabel : GameObject;

function Start()
{
	currentPinNumberPosition = 0;
	pinCode = new int[4];
	correctPinCode = new int[4];
	
	correctPinCode[0] = 1;
	correctPinCode[1] = 3;
	correctPinCode[2] = 1;
	correctPinCode[3] = 7;
}

function Update () {
	var hit : RaycastHit;
	var tag : String;
	var fwd = transform.TransformDirection(Vector3.forward);
	var ButtonIndex : int;
	var ButtonNumber : int;

	if(Physics.Raycast(transform.position, fwd, hit, rayLength))
	{
		tag = hit.collider.gameObject.tag;
		ButtonIndex = tag.IndexOf("AlarmButton");
		if(ButtonIndex > -1)
		{
			ButtonNumber = parseInt(tag.Replace("AlarmButton", ""));
			guiUseObject = true;
			addPinCodeNumber(ButtonNumber);
		} else {
			guiUseObject = false;
		}
	}
	else
	{
		guiUseObject = false;
	}
}

function arraysEqual(a, b) {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length != b.length) return false;

	for (var i = 0; i < a.length; ++i) {
		if (!a[i].Equals(b[i])) return false;
	}
	
	return true;
}

function addPinCodeNumber(newNumber)
{
	if(Input.GetKeyDown("e"))
	{
		pinCode[currentPinNumberPosition] = newNumber;
		pinCodeLabel = GameObject.Find("PinCodeLabel");
		var pinCodeCurrentLabel : String = pinCodeLabel.GetComponent(TextMesh).text;
		pinCodeLabel.GetComponent(TextMesh).text = pinCodeCurrentLabel + newNumber;
	
		if (currentPinNumberPosition == 3) {
			if (arraysEqual(pinCode, correctPinCode)) {
				doorLocked = false;
				pinCodeLabel.GetComponent(TextMesh).color = Color.green;
				Debug.Log("correct");
			} else {
				pinCode = new int[4];
				pinCodeLabel.GetComponent(TextMesh).text = "";
				Debug.Log("wrong");
			}
			currentPinNumberPosition = 0;
		} else {
			currentPinNumberPosition++;
		}
	}
}

function OnGUI()
{
	if(guiUseObject == true)
	{
		GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Press keypad (e)");
	}
}