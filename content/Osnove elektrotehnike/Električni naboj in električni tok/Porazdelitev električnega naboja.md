# Prostorska (volumska) gostota naboja - $\rho \space \left[\frac{C}{m^3}\right]$

<span id="volumska-gostota-naboja">

![Prostorska gostota naboja](/img/OsnoveElektrotehnike/prostorska-gostota-naboja.svg)

$$\rho(T,t)=\lim_{\substack{\delta V_{OL} \to 0 \\ \mathbf{T} \in \delta V_{OL}}}\frac{\delta Q}{\delta V_{OL}}$$

Ulomek predstavlja povprečje po okolici, limita pa to povprečje zaostri okoli neke točke $\mathbf{T}$. Okolica $\delta V_{OL}$ mora biti:

- majhna proti celotnemu volumnu,
- velika proti velikosti atoma oziroma medatomski razdalji (še vedno tisoče nabitih delcev).
  To povprečje priredimo točki $\mathbf{T}$, saj bi zaradi kvantiziranega naboja gostota padla na nič oziroma bi prerasla čez vse meje. Pomembno je tudi, da vzamemo nek kratek časovni interval, saj delci migrirajo po prostoru.

$$\rho=\frac{dQ}{dV_{OL}}$$

> [!NOTE] Gostota naboja bakra (Cu)
> $$\rho=n\cdot e=-ne_0$$
>
> - $n$ - število delcev na kubični meter $\left[\frac{1}{m^3}\right]$
> - $e$ - naboj enega delca ($e=-e_0=-1,6\cdot 10^{-19}C$)
>
> Za baker velja $n=8,4\cdot 10^{28} \space \frac{delcev}{m^3}$:
> $$\rho=-1,34\cdot 10^{10}\frac{C}{m^3}$$

$$Q_{\text{cel}}=\int_{\mathcal{V}}\rho\cdot dV_{\text{OL}}$$

# Ploskovna (površinska) gostota naboja - $\sigma \space \left[\frac{C}{m^2}\right]$

![Ploskovna gostota naboja](/img/OsnoveElektrotehnike/ploskovna-gostota-naboja.svg)

$$\sigma(T,t)=\lim_{\substack{\delta a \to 0 \\ \mathbf{T} \in \delta a}}\frac{\delta Q}{\delta a}$$

$$Q_{\text{cel}}=\int_{\mathcal{A}}\sigma\cdot dV_{\text{OL}}$$

Razlaga za zapis formule je enaka kot pri [[#Prostorska (volumska) gostota naboja - $ rho space left[ frac{C}{m 3} right]$|prostorski porazdelitvi]].

# Linijska porazdelitev naboja - $q \space \left[\frac{C}{m}\right]$

![Linijska porazdelitev naboja](/img/OsnoveElektrotehnike/linijska-porazdelitev-naboja.svg)

$$q(T,t)=\lim_{\substack{\delta l \to 0 \\ \mathbf{T} \in \delta l}}\frac{\delta Q}{\delta l}$$

$$Q_{\text{cel}}=\int_\mathcal{L}q\cdot dl$$

# Točkasti naboj

![Tockasti naboj](/img/OsnoveElektrotehnike/tockasti-naboj.svg)

Točkastega naboja **ni**. Vseeno tak sistem uporabljamo, kadar smo daleč stran (razdalja je veliko večja od dimenzij telesa npr. Zemlja v vesolju) oblika telesa ne vpliva več na polje. Ko pa se bi približali, pa bi lahko razporeditev opredelili kot eno izmed zgornjih.

$$Q_{\text{cel}}=\Sigma_kQ_k$$
