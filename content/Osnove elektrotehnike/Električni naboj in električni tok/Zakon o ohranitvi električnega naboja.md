# Kontinuitetna enačba

Zakon o ohranitvi električnega naboja pravi, da se celotni električni naboja v sistemu ohranja, če v izoliran sistem ne vstopi niti ne izstopi noben nabit delec. V ta sistem lahko postavimo nek prostor $\mathcal{V}$, ki ga omejuje sklenjena ploskev $\mathcal{A}$. Po zakonu o ohranitvi električnega naboja velja, da je vsota množin notranjega in zunanjega naboja konstanta:

$$Q_n(t)+Q_z(t)=konst.$$

Dogovorimo se, da je pozitivni tok usmerjen izven prostora $\mathcal{V}$. Iz [[Električni tok in gostota toka#elektricni-tok|definicije električnega toka]] vemo, da je tok odvod funkcije naboja po času, če zgornjo enačbo odvajamo po času, dobimo:

$$
\begin{aligned}
\frac{dQ_n}{dt}+\frac{dQ_z}{dt}&=0\\
\frac{dQ_n}{dt}&=-\frac{dQ_z}{dt}=-i
\end{aligned}
$$

^7bc06f

Tok predstavlja zmanjšanje notranjega naboja oziroma povečanje zunanjega naboja. [[#^7bc06f|Zgornja enačba]] nam pove: če skozi zaprto ploskev teče navzven usmerjen tok, se naboj znotraj zaprte ploskve zmanjšuje. Tok v izrazu $i=-\frac{dQ}{dt}$ lahko zapišemo s pomočjo [[Električni tok in gostota toka#gostota-toka|gostote električnega toka]], $dQ$ pa s pomočjo [[Porazdelitev električnega naboja#volumska-gostota-naboja|prostorske gostote naboja]]:

$$i=\oint_\mathcal{A}\vec{J}\cdot d\vec{a}=-\frac{d}{dt}\int_\mathcal{V}\rho\cdot dV_{\text{OL}}$$

> [!NOTE] Tokovno polje je izvorno vektorsko polje
> Kadar je levi integral pozitiven, je prostor $\mathcal{V}$ **izvor** (to ne pomeni, da se naboj tam ustvarja) oziroma **ponor**, kadar je negativen.
