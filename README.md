<div>&nbsp;ββ¬ π wave/γ-----------> root directory</div>
<div>&emsp;ββ π .githubγ-----------> git issue template</div>
<div>&emsp;ββ¬ π client/γ-----------> front-end</div>
<div>&emsp;βββ¬ π src/</div>
<div>&emsp;ββββ¬ π api/γ-----------> video κ΄λ ¨ RestAPI</div>
<div>&emsp;βββββ π index.tsγ-----------> Rest API methodλ³ μ μ</div>
<div>&emsp;βββββ π video.tsγ-----------> video upload λ° μλ²μ μ μ₯λ λͺ©λ‘ λΆλ¬μ€κΈ°</div>
<div>&emsp;ββββ¬ π componetns/</div>
<div>&emsp;βββββ¬ π atoms/γ-----------> μμ λ¨μ μ»΄ν¬λνΈ</div>
<div>&emsp;ββββββ π Button/</div>
<div>&emsp;ββββββ π Encoding/γ-----------> μλ£λ μμ νμΌ μΈμ½λ© μ νμλλ λͺ¨λ¬</div>
<div>&emsp;ββββββ π Loading/γ-----------> μ΄κΈ°νλ©΄, μμ λΆλ¬μ€κΈ° λ±μ μ¬μ©λλ λ‘λ© λͺ¨λ¬</div>
<div>&emsp;ββββββ π Logo/γ-----------> μλ¨ λ° λ‘κ³ </div>
<div>&emsp;ββββββ π ModalComponent/γ-----------> "μλ£"λ²νΌ ν΄λ¦­ μ νμ λλ λͺ¨λ¬</div>
<div>&emsp;ββββββ π Range/γ-----------> EffectSliderμ μ¬μ©λλ κΈ°λ³Έ range bar</div>
<div>&emsp;ββββββ π Slider/γ-----------> μμ μ¬λ€μΌ time slider λ§λ</div>
<div>&emsp;ββββββ π TimeText/γ-----------> μμ μ¬λ€μΌ time slider λ§λ μ or currentTimeμ μκ° νμ</div>
<div>&emsp;ββββββ π VolumeRange/γ-----------> μλ μ‘°μ  rangeλ°</div>
<div>&emsp;βββββ¬ π molecules/</div>
<div>&emsp;ββββββ π ButtonGroup/</div>
<div>&emsp;ββββββ π CropLayer/γ-----------> react-rangeλ₯Ό μ¬μ©, left, right slide barλ₯Ό ν΅ν΄ μμ μλ¦</div>
<div>&emsp;ββββββ π CurrentTime/γ-----------> μ¬λ€μΌ λΆλΆ μ’μλ¨ νμ¬ μ¬μ μκ°</div>
<div>&emsp;ββββββ π EffectSliders/γ-----------> νν°ν¨κ³Ό slide bar</div>
<div>&emsp;ββββββ π FileInput/γ-----------> labelμ μ΄μ©ν λΆλ¬μ€κΈ° "λ‘μ»¬" λΆλΆ</div>
<div>&emsp;ββββββ π HoverSlider/γ-----------> μμ μ¬λ€μΌ λ§μ°μ€ νΈλ²λ§ μ slider & timetext νμ</div>
<div>&emsp;ββββββ π Modal/γ-----------> TextInput λλ Helpμ»΄ν¬λνΈλ₯Ό λ°μ λμ μΌλ‘ νμλλ λͺ¨λ¬</div>
<div>&emsp;ββββββ π Thumbnail/γ-----------> μ¬λ€μΌ μμμ μΌμ΄λλ λμ μΈ timeline μ μ΄</div>
<div>&emsp;ββββββ π TimeZone/γ-----------> μ¬λ€μΌ μλ¨ time zone νκΈ°</div>
<div>&emsp;ββββββ π UploadArea/γ-----------> μμ μμ νμΌ λΆλ¬μ€κΈ° λ²νΌ</div>
<div>&emsp;βββββ¬ π organisms/</div>
<div>&emsp;βββ&emsp;ββ π Header/γ-----------> λ‘κ³ , νμ€ν λ¦¬, help/μλ£/μ·¨μ</div>
<div>&emsp;βββ&emsp;ββ π TimeLine/γ-----------> </div>
<div>&emsp;βββ&emsp;ββ π Tools/γ-----------> μ¬μ/10μ΄μ ν/μλ, κΈ°ν ν΄, μλ‘λ μ‘΄</div>
<div>&emsp;βββ&emsp;ββ π VideoContainer/γ-----------> λΉλμ€ preview</div>
<div>&emsp;ββββ¬ π pages/</div>
<div>&emsp;βββββ π edit.tsxγ-----------> λ©μΈ νμ΄μ§</div>
<!-- store start -->
<div>&emsp;ββββ¬ π store/γ-----------> storeκ΅¬μ±μ action/reducer[/sagas] λ‘ κ΅¬μ±</div>
<div>&emsp;βββββ¬ π crop/γ-----------> μμ κΈΈμ΄ μλ₯΄κΈ° κΈ°λ₯</div>
<div>&emsp;ββββββ π actions.ts</div>
<div>&emsp;ββββββ π reducer.ts</div>
<div>&emsp;ββββββ π sagas.ts</div>
<div>&emsp;βββββ¬ π currentVideo/γ-----------> νμ¬ λΉλμ€ μν κ΄λ¦¬</div>
<div>&emsp;ββββββ π actions.ts</div>
<div>&emsp;ββββββ π reducer.ts</div>
<div>&emsp;βββββ¬ π history/</div>
<div>&emsp;ββββββ π actions.ts</div>
<div>&emsp;ββββββ π reducer.ts</div>
<div>&emsp;ββββββ π sagas.ts</div>
<div>&emsp;βββββ¬ π originVideo/γ-----------> μλ³Έ λΉλμ€ μν κ΄λ¦¬</div>
<div>&emsp;ββββββ π actions.ts</div>
<div>&emsp;ββββββ π reducer.ts</div>
<div>&emsp;ββββββ π sagas.ts</div>
<div>&emsp;βββββ¬ π user/</div>
<div>&emsp;ββββββ π actions.ts</div>
<div>&emsp;ββββββ π reducer.ts</div>
<div>&emsp;βββββ¬ π video/γ-----------> μμ μλ‘λ, κ°μ Έμ€κΈ° μν κ΄λ¦¬</div>
<div>&emsp;ββββββ π actions.ts</div>
<div>&emsp;ββββββ π reducer.ts</div>
<div>&emsp;ββββββ π sagas.ts</div>
<div>&emsp;βββββ π actionTypes.tsγ-----------> λͺ¨λ  μ‘μ νμμ enumμΌλ‘ κ΅¬μ±</div>
<div>&emsp;βββββ π reducer.ts</div>
<div>&emsp;βββββ π sagas.ts</div>
<div>&emsp;βββββ π selectors.ts</div>
<!-- store end -->
<div>&emsp;ββββ¬ π theme/</div>
<div>&emsp;βββββ π colors.tsx</div>
<div>&emsp;βββββ π globalStyles.tsx</div>
<div>&emsp;βββββ π sizes.ts</div>
<div>&emsp;ββββ¬ π utils/</div>
<div>&emsp;βββββ π convert.ts</div>
<div>&emsp;βββββ π error.ts</div>
<div>&emsp;βββββ π time.ts</div>
<!-- video start -->
<div>&emsp;ββββ¬ π video/</div>
<div>&emsp;βββββ π encoding.ts</div>
<div>&emsp;βββββ π index.tsx</div>
<div>&emsp;βββββ π metadata.ts</div>
<div>&emsp;βββββ π mux.ts</div>
<div>&emsp;βββββ π video.tsx</div>
<!-- video end -->
<!-- webgl start -->
<div>&emsp;ββββ¬ π webgl/</div>
<div>&emsp;βββββ π fragmentShaderSource.ts</div>
<div>&emsp;βββββ π vertexShaderSource.ts</div>
<div>&emsp;βββββ π webglConfig.ts</div>
<div>&emsp;βββββ π webglController.ts</div>
<!-- webgl end -->
<div>&emsp;ββββ π App.tsx</div>
<div>&emsp;ββββ π index.html</div>
<div>&emsp;ββββ π index.tsx</div>
<div>&emsp;βββ π babel.config.js</div>
<div>&emsp;βββ π package-lock.json</div>
<div>&emsp;βββ π package.json</div>
<div>&emsp;βββ π webpack.common.js</div>
<div>&emsp;βββ π webpack.dev.ts</div>
<div>&emsp;βββ π webpack.prod.ts</div>
<div>&emsp;ββ¬ π server/ - back-end</div>
<div>&emsp;βββ π bin/</div>
<div>&emsp;βββ¬ π src/main/</div>
<div>&emsp;ββββ π controllers/</div>
<div>&emsp;ββββ π loaders/</div>
<div>&emsp;ββββ π middlewares/</div>
<div>&emsp;ββββ π model/</div>
<div>&emsp;ββββ π routes/</div>
<div>&emsp;ββββ π services/</div>
<div>&emsp;ββββ π utils/</div>
<div>&emsp;ββββ π App.ts</div>
<div>&emsp;βββ π package-lock.json</div>
<div>&emsp;βββ π package.json</div>
<div>&emsp;βββ π webpack.config.js</div>
<div>&emsp;ββ π .eslintignore</div>
<div>&emsp;ββ π .eslintrc.js</div>
<div>&emsp;ββ π .gitignore</div>
<div>&emsp;ββ π .gitmessage</div>
<div>&emsp;ββ π .prettierrc</div>
<div>&emsp;ββ π package-lock.json</div>
<div>&emsp;ββ π package.json</div>
<div>&emsp;ββ π READEME.md</div>
<div>&emsp;ββ π tsconfig.json</div>
