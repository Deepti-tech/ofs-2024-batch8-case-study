package com.ofss.main.domain;

import java.time.LocalDateTime;

public class RateOfInterest {
    private int rate_of_interest_id ;
private LocalDateTime duration ;
public RateOfInterest(int rate_of_interest_id, LocalDateTime duration, float rate_of_interest) {
    this.rate_of_interest_id = rate_of_interest_id;
    this.duration = duration;
    this.rate_of_interest = rate_of_interest;
}
private float rate_of_interest ;
public int getRate_of_interest_id() {
    return rate_of_interest_id;
}
public void setRate_of_interest_id(int rate_of_interest_id) {
    this.rate_of_interest_id = rate_of_interest_id;
}
public float getRate_of_interest() {
    return rate_of_interest;
}
public void setRate_of_interest(float rate_of_interest) {
    this.rate_of_interest = rate_of_interest;
}
public RateOfInterest(int rate_of_interest_id, float rate_of_interest) {
    this.rate_of_interest_id = rate_of_interest_id;
    this.rate_of_interest = rate_of_interest;
}
}
