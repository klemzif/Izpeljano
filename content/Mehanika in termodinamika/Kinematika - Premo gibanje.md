- točke se gibljejo v ravni črti (npr. po osi $x$)
- $a$ in $v$ lahko jemljemo kot skalarni količini

![odmik](</img/Premo gibanje/odmik.svg>)

# Hitrost

$$v=\frac{dx}{dt}=\tan{\alpha}$$

Je odvod lege po času, kar se lepo vidi na grafu $x(t)$:

![x(t)](</img/Premo gibanje/x(t).svg>)

## Povprečna hitrost

Je hitrost s katero se bi moralo telo ves čas gibati, da bi opravilo enako dolgo pot kot pri neenakomernem gibanju.

$$\overline{v}t_1=\int_{0}^{t_1}v(t)dt$$

![ploscina-pod-grafom](</img/Premo gibanje/ploscina-pod-grafom.svg>)

# [[Kinematika - Vektorski zapis gibanja#Pospešek kot drugi odvod lege po času|Pospešek]]:

$$a=\frac{dv}{dt}=\frac{d}{dt}\left(\frac{dx}{dt}\right)=\frac{d^2x}{dt^2}$$

> [!NOTE] Odvod grafa $x(t)$ podaja hitrost, zakrivljenost grafa pa pospešek.

# Enakomerno pospešeno gibanje

Hitrost se s časom spreminja linearno, osnovno formulo pa smo izpeljali že [[Kinematika - Vektorski zapis gibanja#Kako iz pospeška dobimo hitrost in lego|tukaj]]:

$$v=v_0+at$$ ^5e8f42

> [!NOTE] Ker so vsi vektorji na isti premici jih lahko v enačbi preprosto nadomestimo z skalarji.

Podobno lahko zapišemo tudi enačbo za lego iz [[Kinematika - Vektorski zapis gibanja#^integral-hitrosti-po-casu|te enačbe]]. Vektor $\vec{r}_0$ nadomestimo z $0$ saj, izhodišče postavimo tja, kjer je telo ob $t=0$:

$$
\begin{aligned}
\vec{r}(t)-\vec{r}_0&=\int_{0}^{t}\vec{v}dt\\
x(t)&=\int_{0}^{t}\vec{v}dt\\
\end{aligned}
$$

Izraz za $x(t)$ pri enakomerno pospešenem gibanju dobimo, če vstavimo [[#Enakomerno pospešeno gibanje|enačbo]] $v=v_0+at$:

<a id="xt"></a>

$$
\begin{aligned}
x(t)&=\int_{0}^{t}(v_0+at)dt\\
x(t)&=v_0t+\frac{at^2}{2}
\end{aligned}
$$

Z dobljenima enačbama lahko sestavimo zvezo med hitrostjo $v$ in pretečeno potjo $x$, tako da iz [[#Enakomerno pospešeno gibanje|prve enačbe]] izrazimo $t=\frac{v-v_0}{a}$ in vstavimo v [[Kinematika - Premo gibanje#^xt|drugo enačbo]]:

$$
\begin{aligned}
x&=v_0\frac{v-v_0}{a}+\frac{a}{2}\frac{(v-v_0)^2}{a^2}\\
2ax&=2v_0(v-v_0)+(v-v_0)^2\\
2ax&=2v_0v-2v_0^2+v^2-2v_0v+v_0^2\\
2ax&=v^2-v_0^2\\
v^2&=v_0^2+2ax
\end{aligned}
$$

## Prosti pad

- $g=9,81\frac{m}{s^2}$
- zračni upor zanemarimo

Za izračun hitrosti prostega pada uporabimo samo $y$ komponento [[Kinematika - Vektorski zapis gibanja#^pospesek-po-kordinatah|splošne enačbe za pospešek]]. Oziroma [[Kinematika - Premo gibanje#^xt|to formulo]], kjer je začetna hitrost $0$:

<a id="hitrost-prostega-pada"></a>

$$
\begin{aligned}
a_y&=\frac{dv_y}{dt}=-g\\
dv_y&=-gdt\\
\int_{0}^{v_y}dv_y&=-g\int_{0}^{t}dt\\
v_y&=-gt
\end{aligned}
$$

> [!NOTE] Ob času nič je hitrost $0$, ker ne poženemo dol.

> [!INFO] $g=9,81\frac{m}{s^2}$
> V tem primeru gravitacijski pospešek jemljemo kot konstanto, saj gre za majhne višinske razlike. Pravi gravitacijski pospešek je: $$g(r)=\frac{GM}{r^2}$$
> Torej če pade objekt za par metrov se $r$ praktično ne spremeni. Ker $g$ ni odvisen od $t$, ga damo pred integral.

![prosti-pad](</img/Premo gibanje/prosti-pad.svg>)

Za izračun prepotovane poti po določenem času padanja pa uporabimo izraz $x(t)$ [[Kinematika - Premo gibanje#^xt|pri enakomerno pospešenem gibanju]]. Tudi tukaj enako velja, da je začetna hitrost $0\frac{m}{s^2}$, saj objekta ne poženemo dol.

$$
\begin{aligned}
s&=\frac{gt^2}{2}
\end{aligned}
$$

> [!WARNING] $s$ predstavlja prepotovano pot

Enako dobimo če kvadriramo enačbo za [[Kinematika - Premo gibanje#^hitrost-prostega-pada|hitrost prostega pada]] in uporabimo čas iz zgornje enačbe:

$$
\begin{aligned}
v&=-gt\\
v^2&=(-gt)^2\\
v^2&=g^2t^2\\
v^2&=g^2\frac{2s}{g}\\
s&=\frac{v^2}{2g}
\end{aligned}
$$

Iz zgornje enačbe lahko izpeljemo tudi:
$$v=-\sqrt{2gh}$$

> [!WARNING] $s$ iz zgornje enačbe zamenjamo s $h$, če nas zanima hitrost tik pred tlemi.
> Minus zaradi postavitve koordinatnega sistema.

$$t=\sqrt{\frac{2h}{g}}=\frac{v}{g}$$

> [!NOTE] Čas padanja je premosorazmeren z $\sqrt{h}$
> $$t=\sqrt{\frac{2h}{g}}=\underbrace{\sqrt{\frac{2}{g}}}_{\text{konst.}}\cdot \sqrt{h}$$
> $$t_p \propto \sqrt{h}$$

Lego telesa ob katerem koli času, pa lahko izračunamo s pomočjo [[Kinematika - Vektorski zapis gibanja#^hitrost-po-komponentah|osnovne definicije hitrosti]] in [[#^hitrost-prostega-pada|hitrosti prostega pada]]:

$$
\begin{aligned}
v_y&=\frac{dy}{dt}\\
-gt&=\frac{dy}{dt}\\
-gtdt&=dy\\
-g\int_{0}^{t}tdt&=\int_{h}^{y}dy\\
-g\frac{t^2}{2}&=y-h\\
y&=h-\frac{gt^2}{2}
\end{aligned}
$$

> [!NOTE] Zakaj meja $h$ do $y$.
>
> 1. ob času $0$ je telo na višini $h$
> 2. ob času $t$ je telo na višini $y$

## Navpični met

- $a_g=-g$
  Podobno kot pri [[#Prosti pad|prostem padu]] uporabimo samo $y$ komponento [[Kinematika - Vektorski zapis gibanja#^pospesek-po-kordinatah|splošne enačbe za pospešek]], a tokrat začetna hitrost ni enaka $0\frac{m}{s^2}$:

$$
\begin{aligned}
\frac{dv_y}{dt}&=-g\\
\int_{v_0}^{v}dv_y&=-\int_{0}^{t}gdt\\
v_y-v_0&=-gt\\
v_y&=v_0-gt
\end{aligned}
$$

Za lego ponovno uporabimo izraz $x(t)$ [[Kinematika - Premo gibanje#^xt|pri enakomerno pospešenem gibanju]], le da ga zapišemo z $y$ in uporabimo gravitacijski pospešek:

<a id="lega-pri-navpicnem-metu"></a>

$$y=v_0t-\frac{gt^2}{2}$$

### Kdaj je dosežena najvišja točka?

To se zgodi, ko je hitrost enaka $0$: $v_y=0$

$$
\begin{aligned}
v_y=v_0-gt&=0\\
t&=\frac{v_0}{g}
\end{aligned}
$$

V [[Kinematika - Premo gibanje#^lega-pri-navpicnem-metu|enačbo za lego pri navpičnem metu]] lahko vstavimo ta čas in dobimo višino, ki jo telo doseže v tem času:

$$
\begin{aligned}
h=y(t)&=v_0t-\frac{gt^2}{2}\\
h&=v_0\frac{v_0}{g}-\frac{g}{2}\frac{v_0^2}{g^2}\\
h&=\frac{v_0^2}{2g}
\end{aligned}
$$

### Kdaj pade telo na tla?

$$
\begin{aligned}
y=0&=v_0t-\frac{gt^2}{2}\\
0&=t(v_0-\frac{gt}{2})\\
t_1=0, \space t_2 \Rightarrow 0=v_0-\frac{gt}{2} \\
t_2&=\frac{2v_0}{g}=2t_{max}
\end{aligned}
$$

> [!NOTE] $t_{max}$ je čas v katerem telo pride do najvišje točke.

> [!DANGER] Čas padanja ($t=\frac{v_0}{g}$) je enak času dviganja.
