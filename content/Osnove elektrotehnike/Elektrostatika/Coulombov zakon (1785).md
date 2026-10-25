![Coulombov zakon](/img/OsnoveElektrotehnike/coulombov-zakon.svg)

Coulombov zakon opisuje električno silo med dvema točkastima nabojema.

- enako veliki
- nasprotno predznačeni
- če sta naboja enako predznačena sta sili odbojni, sicer privlačni
- upadata s kvadratom oddaljenosti med objektoma
- sorazmerni produktu nabojev

$$
\begin{aligned}
\left|\vec{F_e}\right| &\propto \frac{Q_1Q_2}{R^2}\\
\left|\vec{F_e}\right| &=k\cdot\frac{Q_1Q_2}{R^2}\\
\left|\vec{F_e}\right|&=\frac{1}{4\pi\varepsilon_0}\cdot \frac{Q_1Q_2}{R^2}\\
\left|\vec{dF_e}\right|&=\frac{dQ_1dQ_2}{4\pi\varepsilon_0R^2}
\end{aligned}
$$

> [!NOTE] $\varepsilon_0\mu_0c^2_0=1$
>
> - $c_0=299792458\space\frac{m}{s}$ - hitrost svetlobe
> - $\mu_0=4\pi\cdot10^-7\space\frac{Vs}{Am}$ - magnetna konstanta
>   $$\varepsilon_0=\frac{1}{\mu_0c^2_0}=\frac{10^{-9}}{36\pi}\space\frac{As}{Vm}$$

Vektorsko obliko zakona zapišemo takole:

![Coulombov zakon vec](/img/OsnoveElektrotehnike/CZ-vec.svg)

$$\vec{R}=\vec{r}_2-\vec{r}_1=(x_2-x_1,\space y_2-y_1,\space z_2-z_1)$$

$$d\vec{F}_e=\frac{dQ_1\cdot dQ_2}{4\pi\varepsilon_0 R^2}\cdot\vec{e}_R$$

Enotski vektor v smeri $\vec{R}$ pa lahko zapišemo kot:

$$\vec{e}_R=\frac{\vec{R}}{\left|\vec{R}\right|}$$

> [!DANGER] Sila pada s kvadratom razdalje!
>
> $$d\vec{F}_e=\frac{dQ_1\cdot dQ_2}{4\pi\varepsilon_0 R^3}\cdot\vec{R}$$
>
> Zapis pride iz zgornje definicije enotskega vektorja v smeri $\vec{R}$, a sila še vedno pada s **kvadratom** razdalje.
