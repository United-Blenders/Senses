using UnityEngine;
using System.Collections;

public class Inventory : MonoBehaviour {
	public static int charge = 0;
	public AudioClip collectSound;
	//public AudioClip backgroundMusic;
	// HUD
	public Texture2D[] hudCharge;
	public GUITexture chargeHudGUI;

	// Generator
	//public Texture2D[] meterCharge;
	//public Renderer meter;
	// Matches
	//public GUITexture matchGUIprefab;
	//GUITexture matchGUI;
	//public GUIText textHints;
	//public GameObject winObj;
	//Coin Objects
	public GameObject[] coins;
	public int coinsInScene;

	// Use this for initialization
	void Start () {
		PlayerPrefs.SetInt ("PlayerScore", 0);
		PlayerPrefs.SetInt ("PlayerSound", 0);
		removeCoins (coins.Length - coinsInScene);
		charge = 0;

	}


	void removeCoins(int number){
		int index;
		int removed = 0;
		bool continueRemove = true;
		if (coins.Length <= number) {
			return;
		}

		while(continueRemove){
			index = Random.Range(0, coins.Length);

			if(coins[index] == null){
				continue;
			}
			Destroy(coins[index]);
			removed++;
			coins[index] = null;

			if(removed >= number){
				continueRemove = false;
			}
		}
	}

	// Update is called once per frame
	void Update () {

	
	}
	void CellPickup(){
		if (charge >= 5) {
			return;
		}
		HUDon();
		AudioSource.PlayClipAtPoint(collectSound, transform.position);
		charge++;

		chargeHudGUI.texture = hudCharge[charge];
	}
	void HUDon(){
		if(!chargeHudGUI.enabled){
			chargeHudGUI.enabled = true;
		}
	}
}
