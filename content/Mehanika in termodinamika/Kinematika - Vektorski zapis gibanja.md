- gr. kinematos = gibanje
- gibanje teles po prostoru ne glede na vzroke gibanja
- čas je **absoluten** - je zvezen in isti vsepovsod
- gibanje je **relativno** - premikanje vedno opazujemo glede na okolico (opazovalni sistem običajno vežemo na zemljino površje) + gibanje odvisno od koordinatnega sistema v katerem ga opazujemo

> [!NOTE] Translatarno gibanje
> Vsaka točka telesa ima enako hitrost. (enako hitro v enaki smeri, enak pospešek npr. avto če izvzamemo vrteča se kolesa) $\rightarrow$ gibanje telesa določeno, če vemo kako se giblje ena sama točka telesa (npr. težišče) $\rightarrow$ zadošča če si predstavljamo telo kot točko

# Vektorski zapis gibanja

Točke v prostoru opazujemo v koordinatnem sistemu.

Lego točkastega telesa podamo s **krajevnim vektorjem** $\vec{r}(x,y,z)$:

$$\vec{r}=x\vec{i}+y\vec{j}+z\vec{k}$$ <a id="krajevni-vektor"></a>

> [!NOTE] $\vec{i}, \space \vec{j}, \space \vec{k}$
> to je enako kot enotni vektorji $\vec{e_x}, \space \vec{e_y}, \space \vec{e_z}$

Razdalja točkastega telesa od koordinatnega izhodišča je absolutna vrednost (velikost) vektorja $\vec{r}$:

$$\vec{r}=\left|\vec{r}\right| = \sqrt{x^2+y^2+z^2}$$

## Premik

Če se zdaj točka $P$ premakne, recimo, da je krajevni vektor v trenutku $t$ $\vec{r}(t)$. Čez trenutek pa se premakne $\Delta t$. Pri tem se krajevni vektor točke $P$ spremeni od $\vec{r}(t)$ do $\vec{r}(t+dt)$ torej:

$$\Delta r = \vec{r}(t+\Delta t) - \vec{r}(t)$$

Če gre zdaj sprememba časa proti infitizimalno majhni vrednosti $\Delta t \rightarrow 0$ dobimo:

$$d\vec{r}=\vec{r}(t+dt)-\vec{r}(t)$$

Če se $\vec{r}$ spreminja s časom $\Rightarrow$ **GIBANJE**
Tako postane vektor funkcija časa:

$$\vec{r}(t)=x(t)\vec{i}+y(t)\vec{j}+z(t)\vec{k}$$

## Hitrost

Hitrost nam pove, kako hitro se **lega delca spreminja s časom**.

$$\vec{v}=\frac{d\vec{r}}{dt}$$

> [!NOTE] $d\vec{r}$ ima smer tangente na tirnico gibanja točke
>
> $\vec{v}$ ima enako smer kot $\vec{r}$

### Hitrost kot odvod lege po času

<a id="hitrost-kolpc"></a>

Razstavimo $\vec{v}$ na posamezne komponente:

$$\vec{v}=\lim_{\Delta t\rightarrow 0}\frac{\Delta\vec{r}}{\Delta t}=\frac{d\vec{r}}{dt}$$^definicija-hitrosti

če zdaj zapišemo $\vec{r}$ kot smo ga [tukaj](#krajevni-vektor):

$$\vec{v}=\frac{d}{dt}\vec{r}=\frac{d}{dt}(x\vec{i}+y\vec{j}+z\vec{k})=\frac{dx}{dt}\vec{i}+\frac{dy}{dt}\vec{j}+\frac{dz}{dt}\vec{k}=v_x\vec{i}+v_y\vec{j}+v_z\vec{k}$$

Isto stvar lahko zapišemo tudi z oklepaji, kjer nam mesta v oklepaju povejo za katero koordinato gre:

$$\frac{dx}{dt}\vec{i}+\frac{dy}{dt}\vec{j}+\frac{dz}{dt}\vec{k}=\left(\frac{dx}{dt}, \frac{dy}{dt}, \frac{dy}{dt} \right)=\left(v_x, v_y, v_z \right)$$

> [!NOTE] $v_x$, $v_y$, $v_z$ so projekcije $\vec{v}$ na posamezne koordinatne osi
> $$v_x=\frac{dx}{dt}, \space v_y=\frac{dy}{dt}, \space v_z=\frac{dz}{dt}$$ <a id="hitrost-po-komponentah"></a>

### Velikost hitrosti

Zdaj lahko iz vektorja hitrosti po Pitagori dobimo še velikost. Iz zgornje [slike](#hitrost-po-komponentah) vidimo, da je premik $d\vec{r}$ sestavljen iz premika $dx$, $dy$ in $dz$:

$$(dr)^2=(dx)^2+(dy)^2+(dz)^2$$

Če enačbo delimo z $dt^2$ dobimo hitrost, kot smo definirali zgoraj:

$$
\begin{aligned}
\frac{(dr)^2}{dt^2} &= \frac{(dx)^2}{dt^2} + \frac{(dy)^2}{dt^2} + \frac{(dz)^2}{dt^2}\\
\left(\frac{dr}{dt}\right)^2 &=\left(\frac{dx}{dt}\right)^2+\left(\frac{dy}{dt}\right)^2+\left(\frac{dz}{dt}\right)^2
\end{aligned}
$$

> [!NOTE] $dt^2=(dt)^2$

> [!NOTE] $\vec{v}=\frac{d\vec{r}}{dt} \space \Rightarrow \space v=\frac{dr}{dt}$
>
> $$
> \begin{aligned}
> \vec{v}&=\frac{d\vec{r}}{dt}\\
> \left|\vec{v}\right|&=\left|\frac{d\vec{r}}{dt}\right|\\
> def. \space v=\left|\vec{v}\right|, \space dr&=\left|d\vec{r}\right|, \space dt=\left|dt\right|\\
> v&=\frac{dr}{dt}
> \end{aligned}
> $$

Zdaj lahko vstavimo še hitrosti po komponentah, ki smo jih že [definirali](#hitrost-po-komponentah):

$$
\begin{aligned}
v^2&=v^2_x+v^2_y+v^2_z\\
v&=\sqrt{v^2_x+v^2_y+v^2_z}
\end{aligned}
$$

> [!ABSTRACT] Hitrost
> $$\vec{v}=\frac{d}{dt}\vec{r}=\left(\frac{dx}{dt}, \frac{dy}{dt}, \frac{dy}{dt} \right)=\left(v_x, v_y, v_z \right) \space \left[\frac{m}{s}\right]$$
> $$v=\left|\vec{v}\right|=\sqrt{v^2_x+v^2_y+v^2_z}$$

## Pospešek

Pospešek nam pove, kako se hitrost spreminja s časom. Hitrosti se lahko spreminja smer ali velikost zato je pospešek vektor.

![Sprememba hitrosti](</img/Vektorski zapis gibanja/sprememba-hitrosti.svg>)

Vektor spremembe hitrosti:

$$d\vec{v}=\vec{v}(t+dt)-\vec{v}(t)$$

### Pospešek kot odvod hitrosti po času

Trenutni pospešek je limita, ko gre $\Delta t \rightarrow 0$:

$$\vec{a}=\lim_{\Delta t \rightarrow 0}{\frac{\Delta\vec{v}}{\Delta t}}=\frac{d\vec{v}}{dt}$$^definicija-pospeska

Ker je pospešek vektor, ga lahko razbijemo na posamezne komponente. Vektor hitrosti zapišemo po komponentah, kot smo definirali [tukaj](#hitrost-kolpc):

$$
\begin{aligned}\vec{a}&=\frac{d}{dt}\vec{v}=\frac{d}{dt}\left(v_x\vec{i}+v_y\vec{j}+v_z\vec{k}\right)=\left(\frac{dv_x}{dt}\right)\vec{i}+\left(\frac{dv_y}{dt}\right)\vec{j}+\left(\frac{dv_z}{dt}\right)\vec{k}=\left(\frac{dv_x}{dt}, \frac{dv_y}{dt}, \frac{dv_z}{dt}\right)
\end{aligned}
$$

> [!NOTE] Pri zapisu v oklepaju enotne vektorje spustimo saj nam mesto v oklepaju že pove za katero smer gre.

Zapis lahko skrajšamo, tako da nadomestimo zapis pospeška na posameznih koordinatnih oseh z:

<a id="pospesek-po-kordinatah"></a>

$$a_x=\frac{dv_x}{dt}, \space a_y=\frac{dv_y}{dt}, \space a_z=\frac{dv_z}{dt}$$

Dobimo:

$$\vec{a}=a_x\vec{i}+a_y\vec{j}+a_z\vec{k}$$

### Pospešek kot drugi odvod lege po času

Enako kot smo pri prvem primeru zapisali, da je pospešek odvod hitrosti po času zapišemo tudi zdaj. V tem primeru pa namesto vektorja hitrosti vstavimo [definicijo trenutne hitrosti](#hitrost-kolpc):

$$\vec{a}=\frac{d}{dt}\vec{v}=\frac{d}{dt}\left(\frac{d\vec{r}}{dt}\right)=\frac{d^2}{dt^2}\vec{r}$$

Če $\vec{r}$ zapišemo po komponentah, kot smo [tukaj](#hitrost-kolpc), dobimo:

$$\vec{a}=\frac{d^2}{dt^2}\vec{r}=\frac{d^2}{dt^2}\left(x\vec{i}+y\vec{j}+z\vec{k}\right)=\frac{d^2x}{dt^2}\vec{i} + \frac{d^2y}{dt^2}\vec{j} + \frac{d^2z}{dt^2}\vec{k}=\left(\frac{d^2x}{dt^2}, \frac{d^2y}{dt^2}, \frac{d^2z}{dt^2}\right)$$

### Velikost pospeška

Iz [[#^cd2a23|enačbe]] dobimo:

$$a=\left|\vec{a}\right|=\sqrt{a^2_x+a^2_y+a^2_z}$$

> [!NOTE] Smer pospeška $\vec{a}$ kaže smer spemembe hitrosti $d\vec{v}$.

> [!ABSTRACT] Pospešek
> $$\vec{a}=\frac{d^2\vec{r}}{dt^2}=\frac{d\vec{v}}{dt}$$
> $$a=\left|\vec{a}\right|=\sqrt{a^2_x+a^2_y+a^2_z}$$

Pospešek je sestavljen iz tangentnega in radialnega pospeška. **[[#Tangentni pospešek $ vec{a_t}$|Tangentni]]** nam pove, kako se spreminja **velikost** hitrosti, **[[#Radialni pospešek $ vec{a_r}$|radialni]]** pa kako se spreminja **smer** hitrosti:

$$
\begin{aligned}
\vec{a}&=\vec{a_t}+\vec{a_r}\\
a&=\sqrt{a^2_t+a^2_r}
\end{aligned}
$$

^cd0fd2

### Tangentni pospešek $\vec{a_t}$

### Radialni pospešek $\vec{a_r}$

> [!INFO] **Na ravnem delu** tirnice ni radialnega pospeška. $\vec{a_r}=0 \space \Rightarrow \space \vec{a}=\vec{a_t}$

> [!INFO] Radialni pospešek je vedno usmerjen na notranjo stran zakrivljene tirnice.

## Kako iz pospeška dobimo hitrost in lego

Celotno spremembo hitrosti ($\Delta v$) dobimo tako, da seštejemo vse majhne spremembe ($dv$). [[#^cd0fd2|Prej izpeljano enačbo]] za pospešek integriramo in dobimo hitrost:

$$
\begin{aligned}
\vec{a}&=\frac{d\vec{v}}{dt}\\
d\vec{v}&=\vec{a}dt\\
\int_{\vec{v}_0}^{\vec{v}}d\vec{v}&=\int_{0}^{t}\vec{a}dt\\
\vec{v}(t)-\vec{v}_0&=\int_{0}^{t}\vec{a}dt
\end{aligned}
$$

^01d53a

![a(t)](</img/Vektorski zapis gibanja/a(t).svg>)

Lego pa dobimo tako, da integriramo hitrost po času:

<a id="integral-hitrosti-po-casu"></a>

$$
\begin{aligned}
\vec{v}&=\frac{d\vec{r}}{dt}\\
d\vec{r}&=\vec{v}dt\\
\int_{\vec{r}_0}^{\vec{r}}d\vec{r}&=\int_{0}^{t}\vec{v}dt\\
\vec{r}(t)-\vec{r}_0&=\int_{0}^{t}\vec{v}dt
\end{aligned}
$$

![a(t)](</img/Vektorski zapis gibanja/v(t).svg>)

### Enakomerno gibanje

- $\vec{a_0}=0$
- $\vec{v}=\vec{v_0}$
- tirnica: premica, ki jo določa $\vec{v_0}$
  Krajevni vektor se spreminja s časom linearno, zato je tirnica premici, ki jo določa začetna hitrost.

![a(t)](</img/Vektorski zapis gibanja/sprememba-krajevnega-vektorja.svg>)

Ker vemo, da je hitrost konstantna, lahko zgornjo [[#^integral-hitrosti-po-casu|splošno enačbo]] poenostavimo, tako da izpostavimo pred integral $\vec{v}$:

$$
\begin{aligned}
\vec{r}(t) &= \vec{r}_0 + \vec{v}\int_{0}^{t}dt \\
\vec{r}(t) &= \vec{r}_0 + \vec{v}(t-0) \\
\vec{r}(t) &= \vec{r}_0 + \vec{v}t
\end{aligned}
$$

### Enakomerno pospešeno gibanje

- $\vec{a}=\vec{a_0}=konstanta$

V tem primeru je konstanten pospešek, zato [[#^01d53a|integriramo definicijo pospeška]]:

$$
\begin{aligned}
\vec{v}(t)-\vec{v}_0&=\int_{0}^{t}\vec{a}dt\\
\vec{v}(t)&=\vec{v}_0+\vec{a}(t-0)\\
\vec{v}(t)&=\vec{v}_0+\vec{a}t\\
\end{aligned}
$$

Že od prej vemo, da je [[#^definicija-hitrosti|hitrost odvod lege po času]], če jo vstavimo dobimo:

$$
\begin{aligned}
\frac{d\vec{r}}{dt}&=\vec{v}_0+\vec{a}_0t\\
\int_{\vec{r}_0}^{\vec{r}}\frac{d\vec{r}}{dt}dt&=\int_{0}^{t}\vec{v}_0dt+\int_{0}^{t}\vec{a}_0tdt\\
\int_{\vec{r}_0}^{\vec{r}}d\vec{r}&=\int_{0}^{t}\vec{v}_0dt+\vec{a}_0\int_{0}^{t}tdt\\
\vec{r}-\vec{r}_0&=\vec{v}_0t+\vec{a}_0\frac{t^2}{2}\\
\vec{r}(t)&=\vec{r}_0+\vec{v}_0t+\vec{a}_0\frac{t^2}{2}
\end{aligned}
$$

### Neenakomerno pospešeno gibanje

#### Linearni upor

Linearni upor velja samo za **majhne hitrosti**:
$$F_{upor}=-b\cdot v$$
Izhajamo iz drugega Newtonovega zakona in enačbi združimo:

$$
\begin{aligned}
\Sigma F&=m\cdot a\\
m\cdot a &= -b\cdot v\\
a&=-\frac{b}{m}\cdot v
\end{aligned}
$$

> [!TIP] Sorazmernostni faktor $b$
> sila upora $\propto$ hitrost

Ker se $\frac{b}{m}$ večkrat ponavlja uvedemo novo konstanto $k$:
$$a=-k\cdot v$$
Iz [[#^definicija-pospeska|definicije pospeška]] lahko s to formulo izračunamo hitrost po času $t$ zaviranja z linearnim uporom:

$$
\begin{aligned}
\frac{dv}{dt}&=-kv\\
\frac{dv}{v}&=-k dt\\
\int_{v_0}^{v}\frac{dv}{v}&=-k\int_{0}^{t}dt\\
\ln(v)-\ln(v_0)&=-kt\\
\ln\left(\frac{v}{v_0}\right)&=-kt\\
\frac{v}{v_0}&=e^{-kt}\\
v&=v_0e^{-kt}
\end{aligned}
$$

Lahko izračunamo tudi zaustavno pot pri uporu. Ker $e^{-kt}$ nikoli ne pride do $0$, moramo integrirati do neskončnosti:

$$
\begin{aligned}
s&=\int_{0}^{\infty}vdt\\
s&=\int_{0}^{\infty}v_0e^{-kt}dt\\
\end{aligned}
$$

$v_0$ je konstanta zato ga damo pred integral:

$$
\begin{aligned}
s&=v_0\int_{0}^{\infty}e^{-kt}dt\\
s&=v_0\left[-\frac{1}{k}e^{-kt}\right]_{0}^{\infty}\\
s&=v_0\left(0-\left(-\frac{1}{k}\right)\right)\\
s&=\frac{v_0}{k}
\end{aligned}
$$

> [!DANGER] Pot je KONČNA!
> Kljub temu, da se telo teoretično nikoli ne ustavi, saj je sila upora zaradi manjšanja hitrosti vedno manjša, je pot končna.

## Računanje poti

$$s=\int_{t_1}^{t_2}\left|\vec{v}\right|dt$$

![racunanje-poti](</img/Vektorski zapis gibanja/racunanje-poti.svg>)
