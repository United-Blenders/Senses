using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Events;
using UnityEngine.EventSystems;
using System.Collections;

public class MouseOver : MonoBehaviour, IPointerExitHandler, IPointerEnterHandler {

	protected Animator animator;
	protected AnimatorStateInfo currentState;

	protected bool counter = false;

	protected Vector3 mPos;

	// Use this for initialization
	void Start()
	{
		animator = GetComponent<Animator>();
		animator.SetBool ("MouseOver", false);
	}

	#region Callbacks
	
	public void OnPointerEnter(PointerEventData eventData)
	{
		animator.SetBool ("MouseOver", true);
	}
	
	public void OnPointerExit(PointerEventData eventData)
	{
		animator.SetBool ("MouseOver", false);
	}
	
	#endregion
}