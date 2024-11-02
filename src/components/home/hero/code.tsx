const Code = () => {
  const colors = {
    base: "text-[hsl(var(--terminal-fg))]",
    keyword:
      "text-[hsl(var(--terminal-ronin-yellow))] dark:text-[hsl(var(--terminal-carp-yellow))]",
    function:
      "text-[hsl(var(--terminal-aqua1))] dark:text-[hsl(var(--terminal-spring-blue))]",
    string: "text-[hsl(var(--terminal-spring-green))]",
    method: "text-[hsl(var(--terminal-wave-red))]",
    prop: "text-[hsl(var(--terminal-oni-violet))]",
  };

  return (
    <div className="font-mono text-[hsl(var(--terminal-fg))]">
      <span className={colors.keyword}>const</span>{" "}
      <span className={colors.function}>Portfolio</span>{" "}
      <span className={colors.base}>=</span>{" "}
      <span className={colors.base}>()</span>{" "}
      <span className={colors.keyword}>=&gt;</span>{" "}
      <span className={colors.base}>{"{"}</span>
      <div className="ml-4">
        <span className={colors.keyword}>const</span>{" "}
        <span className={colors.function}>uses</span>{" "}
        <span className={colors.base}>=</span>{" "}
        <span className={colors.base}>[</span>
        <div className="ml-4">
          <span className={colors.string}>
            &quot;Showcase my projects&quot;
          </span>
          ,
          <br />
          <span className={colors.string}>&quot;Display my skills&quot;</span>,
          <br />
          <span className={colors.string}>
            &quot;Connect with other devs&quot;
          </span>
          ,
          <br />
          <span className={colors.string}>
            &quot;Find opportunities in tech&quot;
          </span>
          ,
          <br />
          <span className={colors.string}>&quot;Share my journey&quot;</span>
        </div>
        <span className={colors.base}>];</span>
      </div>
      <div className="ml-4">
        <span className={colors.keyword}>return</span>{" "}
        <span className={colors.base}>(</span>
        <div className="ml-4">
          <span className={colors.function}>{"<div>"}</span>
          <div className="ml-4">
            <span className={colors.function}>{"<h2>"}</span>
            <span className={colors.base}>Portfolio Uses</span>
            <span className={colors.function}>{"</h2>"}</span>
            <br />
            <span className={colors.base}>{"{"}</span>
            <span className={colors.function}>uses</span>
            <span className={colors.method}>.map</span>
            <span className={colors.base}>((</span>
            <span className={colors.function}>use</span>
            <span className={colors.base}>,</span>{" "}
            <span className={colors.function}>i</span>
            <span className={colors.base}>) =&gt;</span>{" "}
            <span className={colors.base}>(</span>
            <br />
            <div className="ml-4">
              <span className={colors.function}>{"<div"}</span>{" "}
              <span className={colors.prop}>key</span>
              <span className={colors.base}>=</span>
              <span className={colors.base}>{"{"}</span>
              <span className={colors.function}>i</span>
              <span className={colors.base}>{"}"}</span>
              <span className={colors.function}>{">"}</span>
              <span className={colors.base}>{"{"}</span>
              <span className={colors.function}>use</span>
              <span className={colors.base}>{"}"}</span>
              <span className={colors.function}>{"</div>"}</span>
            </div>
            <span className={colors.base}>)){"}"};</span>
          </div>
          <span className={colors.function}>{"</div>"}</span>
        </div>
        <span className={colors.base}>);</span>
      </div>
      <span className={colors.base}>{"}"}</span>
      <span className={colors.base}>;</span>
    </div>
  );
};

export default Code;
