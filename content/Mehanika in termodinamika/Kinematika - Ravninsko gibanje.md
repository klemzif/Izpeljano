- S časom se spreminjata $x$ in $y$ koordinata.
- tirnica: krivulja
- parametrična oblika: $$x=x(t)\\y=y(t)$$
- eksplicitna oblika (iz ene enačbe izraziš $t$ in ga vstaviš v drugo): $$y=y(x)$$

> [!NOTE] Eksplicitna oblika nam pove obliko poti.

Ravninsko gibanje je sestavljeno iz dveh premih gibanj, po osi $y$ in po osi $x$. Pravokotna projekcija lege telesa na os $x$ ima hitrost:

$$v_x=\frac{dx}{dt}$$

na osi $y$ pa:

$$v_y=\frac{dy}{dt}$$

To smo dokazali [[Kinematika - Vektorski zapis gibanja#Hitrost kot odvod lege po času|tukaj]]. Iz tega sledi, da se telo v času $dt$ po $x$ osi premakne za $dx=v_xdt$ in po $y$ osi za $dy=v_ydt$. Telo samo se v tem istem času premakne za $ds$. Ker sta $dx$ in $dy$ pravokotna, velja Pitagora:

<span id="hitrost"></span>

$$
\begin{aligned}
(ds)^2&=(dx)^2+(dy)^2\\
(ds)^2&=(v_xdt)^2+(v_ydt)^2\\
(ds)^2&=(v_x^2+v_y^2)(dt)^2\\
ds&=dt\sqrt{v_x^2+v_y^2}\\
v&=\frac{ds}{dt}=\sqrt{v_x^2+v_y^2}
\end{aligned}
$$

![razstavljanje-hitrosti](</img/Ravninsko gibanje/razstavljanje-hitrosti.svg>)

> [!NOTE] Hitrost je tangentna na tirnico gibanja.

# Poševni met (v vakumu)

Tudi tukaj gibanje razdelimo na komponente. Edina sila, ki deluje, je gravitacijska:

$$
\begin{aligned}
v_x&=v_0\cos\varphi\\
v_y&=v_0\sin\varphi-gt
\end{aligned}
$$

Lego nato lahko izračunamo iz [[Kinematika - Vektorski zapis gibanja#Hitrost kot odvod lege po času|osnovne definicije]] in zgornjih enačb za hitrost:

<span id="pos-met-lega"></span>

$$
\begin{aligned}
x&=\int_0^t v_xdt=v_0 t \cos\varphi\\
y&=\int_0^tv_ydt=\int_0^t (v_0 \sin\varphi-gt)dt=v_0t\sin\varphi-\frac{gt^2}{2}
\end{aligned}
$$

Enačbo tirnice izračunamo tako, da iz prve enačbe izpostavimo čas in ga vstavimo v drugo:

<span id="enacba-tirnice"></span>

$$
\begin{aligned}
y&=v_0\sin\varphi\left(\frac{x}{v_0\cos\varphi}\right)-\frac{gx^2}{2v_0^2\cos^2\varphi}\\
y&=x\left(\tan\varphi - \frac{x}{2v_0^2\cos^2\varphi}\right)
\end{aligned}
$$

> [!NOTE] Krivulja je **parabola**, obrnjena navzdol zaradi $-x^2$.

## Kdaj telo doseže najvišjo točko?

V najvišji točki je hitrost vodoravna, to pomeni, da je navpična komponenta hitrost enaka nič:

$$
\begin{aligned}
0=v_y(t_1)=v_0\sin\varphi-gt_1
\end{aligned}
$$

Od tod lahko izračunamo čas vzpona:

$$t_1=\frac{v_0\sin\varphi}{g}$$

Najvišjo lego lahko izračunamo iz [[Kinematika - Ravninsko gibanje#^pos-met-lega|osnovne enačbe]] in zgornjega časa:

$$
\begin{align}
h&=v_0\left(\frac{v_0\sin\varphi}{g}\right)\sin\varphi-\frac{g}{2}\left(\frac{v_0\sin\varphi}{g}\right)^2\\
h&=\frac{v_0^2\sin^2\varphi}{g}-\frac{v_0^2\sin^2\varphi}{2g}\\
h&=\frac{v_0^2\sin^2\varphi}{2g}
\end{align}
$$

## Čas leta

Za izračun časa ($t_2$) celotnega meta uporabimo [[Kinematika - Premo gibanje#Kdaj pade telo na tla?|formulo iz navpičnega meta]]:

$$0=v_0\sin\varphi t_2-\frac{gt_2^2}{2}$$

Prva rešitev je $t_2=0$ (začetek gibanja), druga pa:

$$t_2=\frac{2v_0\sin\varphi}{g}=2t_1$$

> [!WARNING] Padajoč in dvigajoč del parabole sta simetrična, zato tudi telo pade na tla pod enakim kotom in z enako hitrostjo kot smo ga vrgli.

## Domet

To je razdalja, na kateri telo pade na tla:

1. S pomočjo čas $t_2$:

$$
\begin{aligned}
D&=v_0t_2\cos\varphi\\
D&=v_0\frac{2v_0\sin\varphi}{g}\cos\varphi\\
D&=\frac{v_0^2}{g}2\sin\varphi\cos\varphi\\
D&=\frac{v_0^2}{g}\sin(2\varphi)
\end{aligned}
$$

2. Neposredno iz [[Kinematika - Ravninsko gibanje#^enacba-tirnice|tirnice]] $y(x)=0$:

$$
\begin{aligned}
y&=x\tan\varphi-\frac{g}{2v_0^2\cos^2\varphi}x^2\\
x=D\neq 0\\
0&=D\tan\varphi-\frac{g}{2v_0^2\cos^2\varphi}D^2\\
\tan\varphi&=\frac{g}{2v_0^2\cos^2\varphi}D\\
D&=\frac{2v_0^2\cos^2\varphi}{g}\cdot\frac{\sin\varphi}{\cos\varphi}\\
D&=\frac{2v_0^2}{g}\sin\varphi\cos\varphi\\
D&=\frac{v_0^2}{g}\sin(2\varphi)
\end{aligned}
$$

> [!NOTE] Najdaljši domet pri $\varphi=45°$
>
> $$
> \begin{aligned}
> \sin(2\varphi)=1\\
> 2\varphi=90°\Rightarrow \varphi=45°\\
> D_{max}=\frac{v^2_0}{g}
> \end{aligned}
> $$

## Hitrost na višini $y$:

Za izračun uporabimo [[Kinematika - Ravninsko gibanje#^hitrost|prej dokazano formulo]]:

$$
\begin{aligned}
v^2&=v_x^2+v_y^2\\
v^2&=(v_0\cos\varphi)^2+(v_0\sin\varphi-gt)^2\\
v^2&=v_0^2+g^2t^2-2v_0gt\sin\varphi\\
v^2&=v_0^2-2g(v_0t\sin\varphi-\frac{gt^2}{2})\\
v^2&=v_0^2-2gy
\end{aligned}
$$

> [!NOTE] Hitrost na neki višini $y$ je neodvisna od kota. (kot se je pokrajšal) Enaka je na isti višini ne glede na smer (dol - pospešeno; gor - upočasnjeno).

Hitrost na vrhu $y=h=\frac{v_0^2\sin^2\varphi}{2g}$, $v_y=0$, $v=v_x$:

$$
\begin{aligned}
v^2&=v_0^2-2gh\\
v^2&=v_0^2-2g\cdot \frac{v_0^2\sin^2\varphi}{2g}\\
v^2&=v_0^2-v_0^2\sin^2\varphi\\
v^2&=v^2_0(1-\sin^2\varphi)\\
v^2&=v_0^2\cos^2\varphi\\
v&=v_0\cos\varphi
\end{aligned}
$$

> [!NOTE] Rezultat se ujema z hitrostjo $v_x$, ki je ves čas konstantna.

# Vodoravni met

Gre za poseben primer [[Kinematika - Ravninsko gibanje#Poševni met (v vakumu)|poševnega meta]] pri kotu $\varphi = 0$.

![vodoravni-met](</img/Ravninsko gibanje/vodoravni-met.svg>)

$$
\begin{aligned}
v_x&=v_0\\
v_y&=-gt
\end{aligned}
$$

$$
\begin{aligned}
x&=v_0t\\
y&=h-\frac{gt^2}{2}
\end{aligned}
$$

Čas padanja:

$$
\begin{aligned}
0&=h-\frac{gt^2}{2}\\
t_p&=\sqrt{\frac{2h}{g}}
\end{aligned}
$$

Hitrost na višini $y$ izračunamo enako kot [[#Hitrost na višini $y$|pri poševnem metu]].

# Kroženje točkastega telesa

- $v$ - obodna hitrost
- $\omega$ - kotna hitrost

![krozenje-tockastega-telesa](</img/Ravninsko gibanje/krozenje-tockastega-telesa.svg>)

Definicija kotne hitrosti (kolikšen kot $d\varphi$ opiše radij v času $dt$):

<span id="kotna-hitrost"></span>

$$d\varphi = \omega dt$$

Iz formule za dolžino krožnega loka sledi formula (kot v radianih):

$$ds=r\cdot d\varphi$$

Formuli združimo in dobimo:

$$

\begin{aligned}
ds&=r\cdot \omega dt\\
\frac{ds}{dt}=v&=r\cdot \omega
\end{aligned}

$$

> [!NOTE] Obodna hitrost je premo sorazmerna s kotno, sorazmernostni faktor je radij $r$.

Z pomočjo razstavljene hitrost iz zgornje slike lahko izračunamo obodno hitrost:

![razstavljanje-hitrosti](</img/Ravninsko gibanje/razst-hitrosti.svg>)

Ponovno izhajamo iz [[Kinematika - Vektorski zapis gibanja#Hitrost|osnovne definicije hitrosti]]:

$$

\begin{aligned}
\vec{r}=(r\cos\varphi,r\sin\varphi,0)\\
\vec{v}(t)&=\frac{d\vec{r}}{dt}=\frac{d}{dt}(r\cos\varphi,r\sin\varphi,0)\\
\vec{v}(t)&=\left(r\frac{d\cos\varphi}{d\varphi}\cdot\frac{d\varphi}{dt},r\frac{d\sin\varphi}{d\varphi}\cdot\frac{d\varphi}{dt},0\right)\\
\vec{v}(t)&=\left(-r\sin\varphi\frac{d\varphi}{dt},r\cos\varphi\frac{d\varphi}{dt},0\right)
\end{aligned}

$$

$\frac{d\varphi}{dt}=\omega$ vstavimo v enačbo:

$$

\begin{aligned}
\vec{v}&=\left(-r\sin\varphi\omega,r\cos\varphi\omega,0\right)\\
\vec{v}&=r\omega(-\sin\varphi,\cos\varphi,0)\\
\vec{v}&=v(-\sin\varphi,\cos\varphi,0)
\end{aligned}

$$

> [!NOTE] Uporabljeno verižno pravilno
> Če se neka spremenljivka $y$ spreminja s $\varphi$, $\varphi$ pa s $t$, potem je hitrost spreminjanja $y$ s časom:
> $$\frac{dy}{dt}=\frac{dy}{d\varphi}\cdot \frac{d\varphi}{dt}$$

> [!NOTE] $\vec{e}_t$ enotni vektor v smeri tangente (hitrosti) na tir.
>
> $$
> \begin{aligned}
> \vec{e}_t&=(-\sin\varphi, \cos\varphi, 0)
> \end{aligned}
> $$

> [!NOTE] $\vec{e}_r$ enotni vektor v smeri krajevnega vektorja $\vec{r}$:
>
> $$
> \begin{aligned}
> \vec{e}_r&=(\cos\varphi, \sin\varphi, 0)\\
> \vec{r}&=r(\cos\varphi, \sin\varphi, 0)=r\vec{e}_r
> \end{aligned}
> $$

Smer vektorja hitrosti lahko dobimo tudi z uporabo enotnega vektorja $\vec{e}_t=\vec{e}_z\times \vec{e}_r$
$$\vec{v}=\omega r\vec{r}_t=\omega r(\vec{e}_z \times \vec{e}_r)=\omega\vec{e}_z \times r\vec{e}_r=\vec{\omega}\times \vec{r}$$
$$\vec{v}=\vec{\omega}\times \vec{r}$$

> [!NOTE] Smer $\vec{\omega}$ določimo po pravilu desnosučnega vijaka:

![vektor-kotne-hitrosti](</img/Ravninsko gibanje/vektor-kotne-hitrosti.svg>)

## Pospešek

Pospešek seveda dobimo iz [[Kinematika - Vektorski zapis gibanja#Pospešek|osnovne definicije]]:

$$\vec{a}=\frac{d\vec{v}}{dt}=\frac{d}{dt}(\vec{\omega}\times\vec{r})=\frac{d\vec{\omega}}{dt}\times\vec{r}+\vec{\omega}\times\frac{d\vec{r}}{dt}$$

> [!INFO] Uporabili smo pravilo za odvod produkta.
> $$\frac{d}{dt}(\vec{A}\times \vec{B})=\frac{d\vec{A}}{dt}\times\vec{B}+\vec{A}\times\frac{d\vec{B}}{dt}$$

Definiramo kotni pospešek, ki opisuje samo spreminjanje $\vec{\omega}$ s časom:

<span id="kotni-pospesek"></span>

$$\vec{\alpha}=\frac{d\vec{\omega}}{dt}$$

Opisuje samo spreminjanje $\vec{\omega}$ s časom saj:

$$

\begin{aligned}
\vec{\omega}&=(0,0,\omega)=\omega\vec{e}_z\\
\vec{\alpha}&=\frac{d}{dt}(0,0,\omega)=\left(0,0,\frac{d\omega}{dt}\right)=(0,0,\alpha)
\end{aligned}

$$

### Tangentni pospešek

$$\vec{a}_t=\vec{\alpha}\times\vec{r}=\alpha\vec{e}_z\times r\vec{e}_r=\alpha r(\vec{e}_z\times \vec{e}_r)=\alpha r\vec{e}_t$$
$$\vec{a}_t=\alpha r\vec{e}_t$$

### Radialni pospešek

$$\vec{\omega}\times\vec{v}=\vec{\omega}\times(\vec{\omega}\times \vec{r})=\vec{\omega}(\vec{\omega}\cdot\vec{r})-\vec{r}(\vec{\omega}\cdot\vec{\omega})=0-\omega^2\vec{r}$$

> [!INFO] Pravilo za dvojni vektorski produkt.
> $$\vec{A}\times(\vec{B}\times\vec{C})=\vec{B}(\vec{A}\cdot\vec{C})-\vec{C}(\vec{A}\cdot\vec{B})$$

$$\vec{a}_r=-\omega^2\vec{r}$$

> [!WARNING] Minus, saj deluje proti središču. Povzroča ga spreminjanje smeri hitrosti, zato je prisoten tudi, ko se velikost $v$ ne spreminja.

### Velikost celotnega pospeška

![komponenti-pospeska](</img/Ravninsko gibanje/komponenti-pospeska.svg>)

$$

\begin{aligned}
\vec{a}=\vec{a}_t+\vec{a}_r
\end{aligned}

$$

## Enakomerno pospešeno kroženje

- $\alpha=\alpha_0=konst.$
- $\omega_0=\omega(t=0)$
- $\varphi_0=\varphi(t=0)$

Izhajamo iz definicije [[Kinematika - Ravninsko gibanje#^kotni-pospesek|kotnega pospeška]]:

$$

\begin{aligned}
d\omega&=\alpha_0dt\\
\int_{\omega_0}^{\omega}d\omega&=\int_0^t\alpha_0dt\\
\omega-\omega_0&=\alpha_0t\\
\omega&=\omega_0+\alpha_0t
\end{aligned}

$$

S pomočjo tega lahko izpeljemo tudi formulo za zasuk iz definicije [[Kinematika - Ravninsko gibanje#^kotna-hitrost|kotne hitrosti]]:

$$

\begin{aligned}
d\varphi&=\omega dt\\
\int_{\varphi_0}^{\varphi}d\varphi&=\int_0^t(\omega_0+\alpha_0t)dt\\
\varphi-\varphi_0&=\omega_0 t+\alpha_0\frac{t^2}{2}\\
\varphi&=\omega_0 t+\alpha_0\frac{t^2}{2}
\end{aligned}

$$

> [!NOTE] Parabolična odvisnost zasuka
> Zaradi kotnega pospeška se kotna hitrost veča, zato v vsaki sekundi preteče več kota kot v prejšni. $\varphi(t)$ je parabola.

## Enakomerno kroženje

- $\alpha=0$
- $\varphi_0=\varphi(t=0)$
  Ker je odvod kotne hitrosti po času enak nič, je kotna hitrost konstanta:
  $$\alpha=\frac{d\omega}{dt}=0\Rightarrow \omega = \omega_0=konst.$$
  Zasuk lahko nato izračunamo:

$$

\begin{aligned}
d\varphi&=\omega_0dt\\
\int_{\varphi_0}^{\varphi}d\varphi&=\int_0^t\omega_0dt\\
\varphi-\varphi_0&=\omega_0t\\
\varphi&=\omega_0t
\end{aligned}

$$

Obhodni čas:

$$t_0=\frac{2\pi r}{v_0}=\frac{2\pi r}{\omega_0 r}=\frac{2\pi}{\omega_0}$$

Sledi:
$$\omega_0=2\pi\frac{1}{t_0}=2\pi\nu_0$$
Frekvenca:
$$\nu_0=\frac{1}{t_0}$$
Vektor lege:

$$

\vec{r}=r(\cos\varphi, \sin\varphi, 0)

$$

$$

x=r\cos(\omega_0t), \space y=r\sin(\omega_t)

$$

$$
$$
