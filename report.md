### What does it do?

* #####Vagrant:
Setur upp umhverfið í sýndarvélinni, einfaldar breytingar á vélinni í einni skrá.

* #####VirtualBox:
Heldur utan um sýndarvélarnar og keyrir upp notendaviðmót fyrir þær.

* #####Grunt:
Tól til að keyra t.d. próf í kóðanum, keyrir jshint, getur concatenateað skrár og margt fleira.

* #####npm:
Tól sem gefur okkur aðgang að ansi stóru safni af kóða þar sem þú getur sótt þér það sem þú vilt og bætt inní þinn kóða á einfaldann hátt.

* #####nodejs:
Er javascript server sem keyrir á v8 vélinni.

* #####bower:
Tól sem heldur utan um pakka sem forritið reiðir sig á og sér til þess að þeir séu í réttri útgáfu.

* #####Day 2 the topology of the deployment path so far:
Hér er ég kominn með 2 virtual vélar í gang, ein develop vél og ein test vél. Ég get keyrt deployment.sh skriptuna í dev vélinni sem pushar nýjustu docker image inná dockerhub og tengir sig svo inná test vélina, sækir breytingar á dockerimage og keyrir hana upp

### Jenkins scriptur

#######Test scriptan
``` 
export DISPLAY=:0
firefox
export ACCEPTANCE_URL=http://localhost:9090
export PATH=/usr/local/bin:$PATH
npm install
ssh vagrant@192.168.33.11 docker restart tester
grunt mochaTest:acceptance
``` 
#######Deployment scriptan
``` 
export DISPLAY=:0
firefox
export PATH=/usr/local/bin:$PATH
npm install
bower install
chmod u+x dockerbuild.sh
./dockerbuild.sh
chmod u+x deployment.sh
./deployment.sh
``` 


Lenra komst ég ekki með verkefnið en að klára dag 7 (skrifað þann 16. ætla að sjá til hvort ég geti smeigt einum degi inn í viðbót fram að 18.)
Ég lenti í algjöru stoppi á degi 4 þar sem ég komst ekki inn í test vélina hjá mér úr dev vélinni (í 3 daga) eftir windows uppfærslu en ég náði að komast í gegnum það vandamál með eldgamallri útgáfu af virtualbox og smá stillingum eftir mikið gúggl.
Þegar ég horfi til baka sé ég að ég steingleimdi að breyta scriptunum hjá mér í að taka inn parametra og ætla ekki að breyta því úr þessu. 
Lítil kunnátta og skilningur á javascript (á þessu leveli) háði mér stundum í verkefninu aðallega á degi 7 
