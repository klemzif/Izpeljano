# Električni tok - $i\space \left[A\right]$

<span id="elektricni-tok">

Električni tok skozi izbrano ploskev nam pove, kako hitro naboj prečka izbrano ploskev. Predznak toka nam pove orientirana ploskev. Orientirana ploskev ima izbrano smer normale, pozitivni tok pa je v smeri te normale.

![premikajoci-se-naboj](/img/OsnoveElektrotehnike/premikajoci-se-naboj.svg)

Električni tok $i$ skozi orientirano ploskev $\mathcal{A}$ izračunamo po naslednji formuli:

$$i=i_{\text{skozi } \mathcal{A}}=\lim_{\delta t \to 0}\frac{\delta Q}{\delta t}=i(t)$$

![Q(t)](</img/OsnoveElektrotehnike/Q(t).svg>)

$Q(t)$ predstavlja skupni naboj, ki je do časa $t$ prešel skozi izbrano ploskev. Naboj, ki je prestopil ploskev $\mathcal{A}$ v času $\delta t$, izračunamo kot $Q(t+\delta t) - Q(t)$. S tem dobimo limito, ki je matematično definirana enako kot odvod, ki nam pove tok v točno določenem trenutku:

$$i=\lim_{\delta t \to 0}\frac{\delta Q}{\delta t}=\lim_{\delta t \to 0}\frac{Q(t+\delta t) - Q(t)}{\delta t}=\frac{dQ(t)}{dt}=Q'(t)$$

# Gostota toka - $\vec{J} \space \left[\frac{A}{m^2}\right]$

<span id="gostota-toka">

Gostota električnega toka nam pove intenzivnost prehajanja naboja skozi del ploskve. To nam pride prav, saj je tok skozi celotno ploskev, ki jo predstavlja spodnja skica, enak nič, kljub temu da naboji prečkajo ploskev.

![Tok skozi ploskev](/img/OsnoveElektrotehnike/tok-skozi-ploskev.svg)

Delčku ploskve $\delta a$ priredimo vektor ploskvice $\delta \vec{a}=\vec{n}\delta a$, kjer je $\vec{n}$ vektor normale na ploskvico.

![Ploskvica](/img/OsnoveElektrotehnike/ploskvica.svg)

V času $\delta t$ skozi to ploskvico pretoči nek paket naboja s hitrostjo $\vec{w}$ in [[Porazdelitev električnega naboja|prostorsko gostoto naboja]] $\rho$. Tok skozi to ploskvico lahko zapišemo po [[#elektricni-tok|definiciji]]:

![Paket naboja](/img/OsnoveElektrotehnike/paket-naboja.svg)

$$\delta i=\frac{\delta Q}{\delta t}=\frac{\rho\cdot dV_{\text{OL}}}{\delta t}$$

Volumen pa lahko izrazimo z osnovno ploskvijo in stranico prizme:

$$\delta i=\frac{\rho\cdot \delta\vec{a}\cdot\delta\vec{l}}{\delta{t}}=\rho \vec{w} \cdot \delta\vec{a}=\vec{J}\cdot \delta\vec{a}$$

Za produkt $\rho\vec{w}$ vpeljemo nov vektor $\vec{J}$:

> [!SUCCESS] Vektor gostote električnega toka
> $$\vec{J}=\rho\vec{w}$$
