export default function Card(props) {
    const {
        path,
        config
    } = props;

    const components = mobro.utils.component.getComponentsFromConfig(config.components);

    return (
        <div className={'w-100'}>
            {config.title ? <div className={'card-widget-title'}>{config.title}</div> : null}

            {mobro.utils.component.renderComponents(components, path, ({Component, type, path, config, i}) => (
                <div className={'pb-05'}>
                    <Component
                        key={i}
                        path={path}
                        config={config}
                        inline={true}
                    />
                </div>
            ))}
        </div>
    );
}