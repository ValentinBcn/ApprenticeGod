#include <Keyboard.h>

#include <IRremote.h>

int RECV_PIN = 9;
IRrecv irrecv(RECV_PIN);
decode_results results;
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(13, OUTPUT);
  irrecv.enableIRIn(); 
  Keyboard.begin();
}

// the loop function runs over and over again forever
void loop() {
 
  if (irrecv.decode(&results)) {
    
    Serial.println(results.value,HEX);
    irrecv.resume();
    if (results.value == 0xC101E57B || results.value == 0xFF6897 || results.value == 0x5F78CA09 || results.value == 0x8DB66050 || results.value == 0x9599D219 || results.value == 0xB585BADF ){
         Keyboard.press('g');
            Keyboard.releaseAll();
       //digitalWrite(13, HIGH);   // turn the LED on (HIGH is the voltage level)
         //delay(2000);                       // wait for a second
        //digitalWrite(13, LOW);    // turn the LED off by making the voltage L   
                              // wait for a second

    }
    else if (results.value == 0x97483BFB || results.value == 0xFF9867 || results.value == 0x964F10D || results.value == 0xA186391F || results.value == 0x4BA9A2DD){
         Keyboard.press('f');
            Keyboard.releaseAll();
       //digitalWrite(13, HIGH);   // turn the LED on (HIGH is the voltage level)
         //delay(2000);                       // wait for a second
        //digitalWrite(13, LOW);    // turn the LED off by making the voltage LOW                                   // wait for a second
    }  
  }
}
