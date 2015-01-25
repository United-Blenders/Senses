#pragma strict

function Awake ()
{
    // Set the texture so that it is the the size of the screen and covers it.
    guiTexture.pixelInset = new Rect(0f, 0f, Screen.width, Screen.height);
}

function Update ()
{
	if (!audio.isPlaying) {
		Application.LoadLevel("World1");
	}
}