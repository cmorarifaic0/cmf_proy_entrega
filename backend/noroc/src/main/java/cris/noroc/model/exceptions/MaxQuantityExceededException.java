package cris.noroc.model.exceptions;


public class MaxQuantityExceededException extends Exception {
	
	private final int maxAllowedIncrement;
	
	public MaxQuantityExceededException(int maxAllowedIncrement) {
		this.maxAllowedIncrement = maxAllowedIncrement;
	}
	
	public int getMaxAllowedIncrement() {
		return maxAllowedIncrement;
	}

}
