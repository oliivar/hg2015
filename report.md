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
