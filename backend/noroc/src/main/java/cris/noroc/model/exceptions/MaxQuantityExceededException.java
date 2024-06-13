package cris.noroc.model.exceptions;

@SuppressWarnings("serial")
public class MaxQuantityExceededException extends Exception {
	
	private int maxAllowedIncrement;
	
	public MaxQuantityExceededException(int maxAllowedIncrement) {
		this.maxAllowedIncrement = maxAllowedIncrement;
	}
	
	public int getMaxAllowedIncrement() {
		return maxAllowedIncrement;
	}

}
