import styles from './index.module.scss';

interface ContainerProps {
    headerNode?: React.JSX.Element;
    children: React.ReactNode;
}
const Container = (props: ContainerProps) => {
    const { headerNode, children } = props;
    
    return (
        <div className={styles.containerBox}>
            {headerNode && headerNode}
            <div className={styles.main}>
                {children}
            </div>
        </div>
    );
};

export default Container;