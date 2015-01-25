using UnityEngine;
using System.Collections;

public class PowerCellBottle : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	public float rotationSpeed = 100.0f;
	// Update is called once per frame
	void Update () {
		transform.Rotate(new Vector3(0,rotationSpeed * Time.deltaTime ,0));
	}

	void OnTriggerEnter(Collider col){
		if(col.gameObject.tag == "Player"){
			PlayerPrefs.SetInt ("PlayerSound", 1);
			col.gameObject.SendMessage("CellPickup");
			Destroy(gameObject);
		}
	}
}
